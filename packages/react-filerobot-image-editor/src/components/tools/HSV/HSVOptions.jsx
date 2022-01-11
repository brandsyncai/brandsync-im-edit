/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Konva from 'konva';

/** Internal Dependencies */
import { useFinetune } from 'hooks';
import Slider from 'components/common/Slider';
import Label from '@scaleflex/ui/core/label';
import { StyledSliderContainer } from './HSV.styled';

const DEFAULT_VALUE = {
  hue: 0,
  saturation: 0,
  value: 0,
};

const sliderStyle = { padding: 0 };

const HSVOptions = ({ t }) => {
  const [finetuneProps, setFinetuneProps] = useFinetune(
    Konva.Filters.HSV,
    DEFAULT_VALUE,
  );

  const changeValue = (name, value) => {
    setFinetuneProps({
      [name]: +value,
    });
  };

  return (
    <>
      <StyledSliderContainer>
        <Label>{t('hue')}</Label>
        <Slider
          min={0}
          step={1}
          max={259}
          value={finetuneProps.hue ?? DEFAULT_VALUE.hue}
          onChange={(val) => changeValue('hue', val)}
          style={sliderStyle}
        />
      </StyledSliderContainer>
      <StyledSliderContainer>
        <Label>{t('saturation')}</Label>
        <Slider
          min={-2}
          step={0.5}
          max={10}
          value={finetuneProps.saturation ?? DEFAULT_VALUE.saturation}
          onChange={(val) => changeValue('saturation', val)}
          style={sliderStyle}
        />
      </StyledSliderContainer>
      <StyledSliderContainer>
        <Label>{t('value')}</Label>
        <Slider
          min={-2}
          step={0.1}
          max={2}
          value={finetuneProps.value ?? DEFAULT_VALUE.value}
          onChange={(val) => changeValue('value', val)}
          style={sliderStyle}
        />
      </StyledSliderContainer>
    </>
  );
};

HSVOptions.propTypes = {
  t: PropTypes.func.isRequired,
};

export default HSVOptions;
