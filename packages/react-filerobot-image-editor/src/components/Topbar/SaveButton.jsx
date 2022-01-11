/** External Dependencies */
import React, { useEffect, useState } from 'react';
import MenuItem from '@scaleflex/ui/core/menu-item';
import SaveAs from '@scaleflex/icons/save-as';
import Label from '@scaleflex/ui/core/label';

/** Internal Dependencies */
import { useStore } from 'hooks';
import getFileFullName from 'utils/getFileFullName';
import mapCropBox from 'utils/mapCropBox';
import extractCurrentDesignState from 'utils/extractCurrentDesignState';
import {
  CLOSING_REASONS,
  ELLIPSE_CROP,
  IMAGE_NODE_ID,
  SUPPORTED_IMAGE_TYPES,
  TOOLS_IDS,
} from 'utils/constants';
import { SET_SAVED, SET_ERROR, SHOW_LOADER, HIDE_LOADER } from 'actions';
import Modal from 'components/common/Modal';
import Slider from 'components/common/Slider';
import restrictNumber from 'utils/restrictNumber';
import { Resize } from 'components/tools/Resize';
import operationsToCloudimageUrl from 'utils/operationsToCloudimageUrl';
import imageToBase64 from 'utils/imageToBase64';
import getSizeAfterRotation from 'utils/getSizeAfterRotation';
import {
  StyledSaveButton,
  StyledFileExtensionSelect,
  StyledFileNameInput,
  StyledQualityWrapper,
  StyledResizeOnSave,
} from './Topbar.styled';

const sliderStyle = { marginBottom: 16 };

const SaveButton = () => {
  const state = useStore();
  const {
    theme,
    dispatch,
    shownImageDimensions,
    designLayer,
    originalImage,
    resize,
    isLoadingGlobally,
    haveNotSavedChanges,
    t,
    adjustments: { crop, isFlippedX, isFlippedY, rotation = 0 } = {},
    config: {
      onClose,
      closeAfterSave,
      onBeforeSave,
      onSave,
      forceToPngInEllipticalCrop,
      defaultSavedImageType,
      useCloudimage,
      cloudimage,
    },
  } = state;
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [imageFileInfo, setImageFileInfo] = useState({ quality: 0.92 });
  const isQualityAcceptable =
    imageFileInfo.extension === 'jpeg' || imageFileInfo.extension === 'webp';

  const cancelModal = () => {
    setIsModalOpened(false);
  };

  const handleSave = () => {
    const { clipWidth, clipHeight, clipX, clipY } = designLayer.attrs;

    // We're using this for letting the designLayer's clipFunc know that we are in saving mode
    // so it should apply elliptical crop if it is not applied and user is chosing ellitpical ratio.
    designLayer.setAttr('isSaving', true);

    const preparedCanvas = designLayer.getStage().clone({
      width: originalImage.width,
      height: originalImage.height,
      scaleX: isFlippedX ? -1 : 1,
      scaleY: isFlippedY ? -1 : 1,
    });

    const [preparedDesignLayer] = preparedCanvas.children; // children[0] = Design layer
    preparedCanvas.children[1].destroy(); // children[1] = Transformers layer, which is not needed anymore
    const imgNode = preparedCanvas.findOne(`#${IMAGE_NODE_ID}`);
    imgNode.cache();

    const preparedDesignLayerScale = {
      x: preparedCanvas.width() / shownImageDimensions.width,
      y: preparedCanvas.height() / shownImageDimensions.height,
    };
    preparedDesignLayer.setAttrs({
      rotation: 0,
      offsetX: 0,
      offsetY: 0,
      x: 0,
      y: 0,
      scaleX: preparedDesignLayerScale.x,
      scaleY: preparedDesignLayerScale.y,
    });

    const { name, extension, quality, size = {} } = imageFileInfo;

    const mappedCropBox = mapCropBox(
      {
        x: crop.x || clipX,
        y: crop.y || clipY,
        width: crop.width || clipWidth,
        height: crop.height || clipHeight,
      },
      shownImageDimensions,
      preparedCanvas.attrs,
    );
    const rotatedCropBox = getSizeAfterRotation(
      mappedCropBox.width,
      mappedCropBox.height,
      rotation,
    );
    preparedCanvas.setAttrs({
      offsetX: mappedCropBox.width / 2 + mappedCropBox.x,
      offsetY: mappedCropBox.height / 2 + mappedCropBox.y,
      width: rotatedCropBox.width,
      height: rotatedCropBox.height,
      x: rotatedCropBox.width / 2,
      y: rotatedCropBox.height / 2,
      rotation,
    });

    if (size.width) {
      const newScaleX =
        (isFlippedX ? -1 : 1) * (size.width / preparedCanvas.width());
      preparedCanvas.setAttrs({
        scaleX: newScaleX,
        width: size.width,
        x: preparedCanvas.x() * Math.abs(newScaleX),
      });
    }
    if (size.height) {
      const newScaleY =
        (isFlippedY ? -1 : 1) * (size.height / preparedCanvas.height());
      preparedCanvas.setAttrs({
        scaleY: newScaleY,
        height: size.height,
        y: preparedCanvas.y() * Math.abs(newScaleY),
      });
    }

    const finalOptions = {
      mimeType: `image/${extension}`,
      ...(isQualityAcceptable ? { quality } : {}),
    };
    const finalCanvas = preparedCanvas.toCanvas(finalOptions);
    const finalImgBase64 = preparedCanvas.toDataURL(finalOptions);
    const finalImgDesignState = {
      ...extractCurrentDesignState(state),
      shownImageDimensions: {
        width: state.shownImageDimensions.width,
        height: state.shownImageDimensions.height,
        scaledBy: state.shownImageDimensions.scaledBy,
      },
    };
    if (finalImgDesignState.filter) {
      finalImgDesignState.filter = finalImgDesignState.filter.name;
    }
    finalImgDesignState.finetunes = finalImgDesignState.finetunes.map(
      (finetuneFn) => finetuneFn.name,
    );
    Object.keys(finalImgDesignState.annotations).forEach((k) => {
      const annotation = finalImgDesignState.annotations[k];
      const imgSrc =
        annotation.name === TOOLS_IDS.IMAGE && annotation.image?.src;
      if (imgSrc && imgSrc.startsWith('blob:')) {
        finalImgDesignState.annotations[k].image = imageToBase64(
          annotation.image,
        );
      } else if (annotation.image instanceof HTMLImageElement) {
        finalImgDesignState.annotations[k].image = imgSrc;
      }
    });

    const finalImgPassedObject = {
      fullName: `${name}.${extension}`,
      name,
      extension,
      mimeType: `image/${extension}`,
      imageCanvas: finalCanvas,
      imageBase64: finalImgBase64,
      width: size.width || mappedCropBox.width,
      height: size.height || mappedCropBox.height,
      ...(isQualityAcceptable ? { quality } : {}),
    };

    onSave(finalImgPassedObject, finalImgDesignState);

    // Reseting isSaving to false so we get everything back to normal if user wants to continue editing after saving.
    designLayer.setAttr('isSaving', false);
    dispatch({ type: SET_SAVED });
    imgNode.clearCache();

    dispatch({ type: HIDE_LOADER });

    cancelModal();
    if (closeAfterSave && onClose) {
      onClose(CLOSING_REASONS.AFTER_SAVE, haveNotSavedChanges);
    }
  };

  const validateInfoThenSave = () => {
    if (typeof onSave !== 'function') {
      throw new Error('Please provide onSave function handler to the plugin.');
    }
    if (!imageFileInfo.name || !imageFileInfo.extension) {
      dispatch({
        type: SET_ERROR,
        payload: {
          error: {
            message: t('nameIsRequired'),
          },
        },
      });
      return;
    }

    dispatch({ type: SHOW_LOADER });

    setTimeout(handleSave, 0);
  };

  const changeFileName = (e) => {
    const name = e.target.value;
    setImageFileInfo({
      ...imageFileInfo,
      name,
      nameChanged: true,
    });
  };

  const changeQuality = (newQuality) => {
    setImageFileInfo({
      ...imageFileInfo,
      quality: restrictNumber(newQuality / 100, 0.01, 1),
    });
  };

  const triggerSaveHandler = () => {
    if (useCloudimage) {
      const { filter, ...designState } = extractCurrentDesignState(state);
      const cloudimageUrl = operationsToCloudimageUrl(
        cloudimage,
        designState,
        shownImageDimensions,
        originalImage,
      );
      const mappedCropBox = mapCropBox(
        {
          x: crop.x,
          y: crop.y,
          width: crop.width,
          height: crop.height,
        },
        shownImageDimensions,
        originalImage,
      );
      onSave(
        {
          // mimeType: `image/${extension}`,
          cloudimageUrl,
          width: resize.width || mappedCropBox.width,
          height: resize.height || mappedCropBox.height,
        },
        designState,
      );
      return;
    }

    if (
      typeof onBeforeSave === 'function' &&
      onBeforeSave(imageFileInfo) === false
    ) {
      validateInfoThenSave();
      return;
    }

    setIsModalOpened(true);
  };

  const resizeImageFile = (newSize) => {
    setImageFileInfo({
      ...imageFileInfo,
      size: {
        ...imageFileInfo.size,
        ...newSize,
      },
    });
  };

  useEffect(() => {
    if (originalImage && (!imageFileInfo.name || !imageFileInfo.extension)) {
      const { name, extension } = getFileFullName(
        originalImage.name,
        forceToPngInEllipticalCrop && crop.ratio === ELLIPSE_CROP
          ? 'png'
          : SUPPORTED_IMAGE_TYPES.includes(
              defaultSavedImageType?.toLowerCase(),
            ) && defaultSavedImageType,
      );

      setImageFileInfo({ ...imageFileInfo, name, extension });
    }
  }, [originalImage, isModalOpened]);

  useEffect(() => {
    setImageFileInfo({
      ...imageFileInfo,
      size: {
        width: resize.width,
        height: resize.height,
      },
    });
  }, [resize]);

  return (
    <>
      <StyledSaveButton onClick={triggerSaveHandler} color="primary" size="md">
        {t('save')}
      </StyledSaveButton>
      {isModalOpened && (
        <Modal
          title={t('saveAsModalLabel')}
          Icon={(props) => (
            <SaveAs color={theme.palette['accent-primary']} {...props} />
          )}
          isOpened={isModalOpened}
          onCancel={cancelModal}
          onDone={validateInfoThenSave}
          doneLabel={t('save')}
          cancelLabel={t('cancel')}
          doneButtonColor="primary"
          areButtonsDisabled={isLoadingGlobally}
        >
          <StyledFileNameInput
            value={imageFileInfo.name}
            onChange={changeFileName}
            size="sm"
            placeholder={t('name')}
            error={Boolean(imageFileInfo.name)}
            focusOnMount
          />
          <StyledFileExtensionSelect
            onChange={(ext) =>
              setImageFileInfo({ ...imageFileInfo, extension: ext })
            }
            value={imageFileInfo.extension}
            placeholder={t('extension')}
            size="sm"
          >
            {SUPPORTED_IMAGE_TYPES.map((ext) => (
              <MenuItem key={ext} value={ext}>
                {ext}
              </MenuItem>
            ))}
          </StyledFileExtensionSelect>
          {isQualityAcceptable && (
            <StyledQualityWrapper>
              <Label>{t('quality')}</Label>
              <Slider
                annotation="%"
                min={1}
                max={100}
                onChange={changeQuality}
                value={parseInt(imageFileInfo.quality * 100, 10)}
                width="100%"
                style={sliderStyle}
              />
            </StyledQualityWrapper>
          )}
          <StyledResizeOnSave>
            <Label>{t('resize')}</Label>
            <Resize
              onChange={resizeImageFile}
              currentSize={imageFileInfo?.size || {}}
              hideResetButton
              alignLeft
            />
          </StyledResizeOnSave>
        </Modal>
      )}
    </>
  );
};

export default SaveButton;
