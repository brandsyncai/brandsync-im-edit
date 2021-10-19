/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Brightness = ({ color, ...props }) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
  >
    <g clipPath="url(#clip0)">
      <mask id="path-1-inside-1" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.02007 1.26484C8.02007 0.961087 8.26631 0.714844 8.57007 0.714844C8.87383 0.714844 9.12007 0.961087 9.12007 1.26484V2.56484C9.12007 2.8686 8.87383 3.11484 8.57007 3.11484C8.26631 3.11484 8.02007 2.8686 8.02007 2.56484V1.26484ZM8.49995 12.4148C10.5434 12.4148 12.2 10.7583 12.2 8.71484C12.2 6.67139 10.5434 5.01484 8.49995 5.01484C6.4565 5.01484 4.79995 6.67139 4.79995 8.71484C4.79995 10.7583 6.4565 12.4148 8.49995 12.4148ZM8.49995 13.5148C11.1509 13.5148 13.3 11.3658 13.3 8.71484C13.3 6.06388 11.1509 3.91484 8.49995 3.91484C5.84898 3.91484 3.69995 6.06388 3.69995 8.71484C3.69995 11.3658 5.84898 13.5148 8.49995 13.5148ZM8.57007 14.3148C8.26631 14.3148 8.02007 14.5611 8.02007 14.8648V16.1648C8.02007 16.4686 8.26631 16.7148 8.57007 16.7148C8.87383 16.7148 9.12007 16.4686 9.12007 16.1648V14.8648C9.12007 14.5611 8.87383 14.3148 8.57007 14.3148ZM15.9498 8.23501C16.2535 8.23501 16.4998 8.48125 16.4998 8.78501C16.4998 9.08877 16.2535 9.33501 15.9498 9.33501H14.6498C14.346 9.33501 14.0998 9.08877 14.0998 8.78501C14.0998 8.48125 14.346 8.23501 14.6498 8.23501H15.9498ZM2.89976 8.78501C2.89976 8.48125 2.65351 8.23501 2.34976 8.23501H1.04976C0.745999 8.23501 0.499756 8.48125 0.499756 8.78501C0.499756 9.08877 0.745999 9.33501 1.04976 9.33501H2.34976C2.65351 9.33501 2.89976 9.08877 2.89976 8.78501ZM14.1639 13.5867C14.3787 13.8015 14.3787 14.1497 14.1639 14.3645C13.9491 14.5793 13.6008 14.5793 13.3861 14.3645L12.4668 13.4453C12.252 13.2305 12.252 12.8822 12.4668 12.6674C12.6816 12.4526 13.0298 12.4527 13.2446 12.6674L14.1639 13.5867ZM4.54727 4.7478C4.76206 4.53301 4.76206 4.18477 4.54727 3.96998L3.62803 3.05074C3.41325 2.83595 3.06501 2.83595 2.85022 3.05074C2.63543 3.26553 2.63543 3.61377 2.85022 3.82856L3.76946 4.7478C3.98424 4.96258 4.33248 4.96258 4.54727 4.7478ZM3.62792 14.3787C3.41313 14.5935 3.06489 14.5935 2.85011 14.3787C2.63532 14.1639 2.63532 13.8156 2.85011 13.6009L3.76934 12.6816C3.98413 12.4668 4.33237 12.4668 4.54716 12.6816C4.76195 12.8964 4.76195 13.2446 4.54716 13.4594L3.62792 14.3787ZM12.4673 4.76226C12.6821 4.97705 13.0303 4.97705 13.2451 4.76226L14.1643 3.84302C14.3791 3.62824 14.3791 3.28 14.1643 3.06521C13.9496 2.85042 13.6013 2.85042 13.3865 3.06521L12.4673 3.98445C12.2525 4.19923 12.2525 4.54747 12.4673 4.76226Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.02007 1.26484C8.02007 0.961087 8.26631 0.714844 8.57007 0.714844C8.87383 0.714844 9.12007 0.961087 9.12007 1.26484V2.56484C9.12007 2.8686 8.87383 3.11484 8.57007 3.11484C8.26631 3.11484 8.02007 2.8686 8.02007 2.56484V1.26484ZM8.49995 12.4148C10.5434 12.4148 12.2 10.7583 12.2 8.71484C12.2 6.67139 10.5434 5.01484 8.49995 5.01484C6.4565 5.01484 4.79995 6.67139 4.79995 8.71484C4.79995 10.7583 6.4565 12.4148 8.49995 12.4148ZM8.49995 13.5148C11.1509 13.5148 13.3 11.3658 13.3 8.71484C13.3 6.06388 11.1509 3.91484 8.49995 3.91484C5.84898 3.91484 3.69995 6.06388 3.69995 8.71484C3.69995 11.3658 5.84898 13.5148 8.49995 13.5148ZM8.57007 14.3148C8.26631 14.3148 8.02007 14.5611 8.02007 14.8648V16.1648C8.02007 16.4686 8.26631 16.7148 8.57007 16.7148C8.87383 16.7148 9.12007 16.4686 9.12007 16.1648V14.8648C9.12007 14.5611 8.87383 14.3148 8.57007 14.3148ZM15.9498 8.23501C16.2535 8.23501 16.4998 8.48125 16.4998 8.78501C16.4998 9.08877 16.2535 9.33501 15.9498 9.33501H14.6498C14.346 9.33501 14.0998 9.08877 14.0998 8.78501C14.0998 8.48125 14.346 8.23501 14.6498 8.23501H15.9498ZM2.89976 8.78501C2.89976 8.48125 2.65351 8.23501 2.34976 8.23501H1.04976C0.745999 8.23501 0.499756 8.48125 0.499756 8.78501C0.499756 9.08877 0.745999 9.33501 1.04976 9.33501H2.34976C2.65351 9.33501 2.89976 9.08877 2.89976 8.78501ZM14.1639 13.5867C14.3787 13.8015 14.3787 14.1497 14.1639 14.3645C13.9491 14.5793 13.6008 14.5793 13.3861 14.3645L12.4668 13.4453C12.252 13.2305 12.252 12.8822 12.4668 12.6674C12.6816 12.4526 13.0298 12.4527 13.2446 12.6674L14.1639 13.5867ZM4.54727 4.7478C4.76206 4.53301 4.76206 4.18477 4.54727 3.96998L3.62803 3.05074C3.41325 2.83595 3.06501 2.83595 2.85022 3.05074C2.63543 3.26553 2.63543 3.61377 2.85022 3.82856L3.76946 4.7478C3.98424 4.96258 4.33248 4.96258 4.54727 4.7478ZM3.62792 14.3787C3.41313 14.5935 3.06489 14.5935 2.85011 14.3787C2.63532 14.1639 2.63532 13.8156 2.85011 13.6009L3.76934 12.6816C3.98413 12.4668 4.33237 12.4668 4.54716 12.6816C4.76195 12.8964 4.76195 13.2446 4.54716 13.4594L3.62792 14.3787ZM12.4673 4.76226C12.6821 4.97705 13.0303 4.97705 13.2451 4.76226L14.1643 3.84302C14.3791 3.62824 14.3791 3.28 14.1643 3.06521C13.9496 2.85042 13.6013 2.85042 13.3865 3.06521L12.4673 3.98445C12.2525 4.19923 12.2525 4.54747 12.4673 4.76226Z"
        fill="#C4C4C4"
      />
      <path
        d="M0.499756 8.78501H1.49976H0.499756ZM4.54727 3.96998L5.25438 3.26287L5.25438 3.26287L4.54727 3.96998ZM4.54727 4.7478L5.25438 5.4549L5.25438 5.4549L4.54727 4.7478ZM3.62803 3.05074L2.92093 3.75785H2.92093L3.62803 3.05074ZM2.85022 3.82856L2.14311 4.53566L2.85022 3.82856ZM3.76946 4.7478L4.47656 4.04069L3.76946 4.7478ZM2.85011 14.3787L3.55721 13.6716H3.55721L2.85011 14.3787ZM3.62792 14.3787L2.92082 13.6716H2.92082L3.62792 14.3787ZM4.54716 12.6816L5.25427 11.9745L5.25427 11.9745L4.54716 12.6816ZM13.2451 4.76226L12.538 4.05516V4.05516L13.2451 4.76226ZM12.4673 4.76226L13.1744 4.05516V4.05516L12.4673 4.76226ZM14.1643 3.84302L14.8715 4.55013L14.8715 4.55013L14.1643 3.84302ZM13.3865 3.06521L14.0936 3.77231V3.77231L13.3865 3.06521ZM12.4673 3.98445L13.1744 4.69155L12.4673 3.98445ZM8.57007 -0.285156C7.71403 -0.285156 7.02007 0.408802 7.02007 1.26484H9.02007C9.02007 1.51337 8.8186 1.71484 8.57007 1.71484V-0.285156ZM10.1201 1.26484C10.1201 0.408802 9.42611 -0.285156 8.57007 -0.285156V1.71484C8.32154 1.71484 8.12007 1.51337 8.12007 1.26484H10.1201ZM10.1201 2.56484V1.26484H8.12007V2.56484H10.1201ZM8.57007 4.11484C9.42611 4.11484 10.1201 3.42089 10.1201 2.56484H8.12007C8.12007 2.31632 8.32154 2.11484 8.57007 2.11484V4.11484ZM7.02007 2.56484C7.02007 3.42088 7.71403 4.11484 8.57007 4.11484V2.11484C8.8186 2.11484 9.02007 2.31632 9.02007 2.56484H7.02007ZM7.02007 1.26484V2.56484H9.02007V1.26484H7.02007ZM11.2 8.71484C11.2 10.206 9.99112 11.4148 8.49995 11.4148V13.4148C11.0957 13.4148 13.2 11.3106 13.2 8.71484H11.2ZM8.49995 6.01484C9.99112 6.01484 11.2 7.22368 11.2 8.71484H13.2C13.2 6.11911 11.0957 4.01484 8.49995 4.01484V6.01484ZM5.79995 8.71484C5.79995 7.22368 7.00878 6.01484 8.49995 6.01484V4.01484C5.90421 4.01484 3.79995 6.11911 3.79995 8.71484H5.79995ZM8.49995 11.4148C7.00878 11.4148 5.79995 10.206 5.79995 8.71484H3.79995C3.79995 11.3106 5.90421 13.4148 8.49995 13.4148V11.4148ZM12.3 8.71484C12.3 10.8135 10.5986 12.5148 8.49995 12.5148V14.5148C11.7032 14.5148 14.3 11.9181 14.3 8.71484H12.3ZM8.49995 4.91484C10.5986 4.91484 12.3 6.61616 12.3 8.71484H14.3C14.3 5.51159 11.7032 2.91484 8.49995 2.91484V4.91484ZM4.69995 8.71484C4.69995 6.61616 6.40127 4.91484 8.49995 4.91484V2.91484C5.2967 2.91484 2.69995 5.51159 2.69995 8.71484H4.69995ZM8.49995 12.5148C6.40127 12.5148 4.69995 10.8135 4.69995 8.71484H2.69995C2.69995 11.9181 5.2967 14.5148 8.49995 14.5148V12.5148ZM9.02007 14.8648C9.02007 15.1134 8.8186 15.3148 8.57007 15.3148V13.3148C7.71403 13.3148 7.02007 14.0088 7.02007 14.8648H9.02007ZM9.02007 16.1648V14.8648H7.02007V16.1648H9.02007ZM8.57007 15.7148C8.8186 15.7148 9.02007 15.9163 9.02007 16.1648H7.02007C7.02007 17.0209 7.71403 17.7148 8.57007 17.7148V15.7148ZM8.12007 16.1648C8.12007 15.9163 8.32154 15.7148 8.57007 15.7148V17.7148C9.42611 17.7148 10.1201 17.0209 10.1201 16.1648H8.12007ZM8.12007 14.8648V16.1648H10.1201V14.8648H8.12007ZM8.57007 15.3148C8.32154 15.3148 8.12007 15.1134 8.12007 14.8648H10.1201C10.1201 14.0088 9.42611 13.3148 8.57007 13.3148V15.3148ZM17.4998 8.78501C17.4998 7.92897 16.8058 7.23501 15.9498 7.23501V9.23501C15.7012 9.23501 15.4998 9.03354 15.4998 8.78501H17.4998ZM15.9498 10.335C16.8058 10.335 17.4998 9.64105 17.4998 8.78501H15.4998C15.4998 8.53648 15.7012 8.33501 15.9498 8.33501V10.335ZM14.6498 10.335H15.9498V8.33501H14.6498V10.335ZM13.0998 8.78501C13.0998 9.64105 13.7937 10.335 14.6498 10.335V8.33501C14.8983 8.33501 15.0998 8.53648 15.0998 8.78501H13.0998ZM14.6498 7.23501C13.7937 7.23501 13.0998 7.92897 13.0998 8.78501H15.0998C15.0998 9.03354 14.8983 9.23501 14.6498 9.23501V7.23501ZM15.9498 7.23501H14.6498V9.23501H15.9498V7.23501ZM2.34976 9.23501C2.10123 9.23501 1.89976 9.03354 1.89976 8.78501H3.89976C3.89976 7.92897 3.2058 7.23501 2.34976 7.23501V9.23501ZM1.04976 9.23501H2.34976V7.23501H1.04976V9.23501ZM1.49976 8.78501C1.49976 9.03354 1.29828 9.23501 1.04976 9.23501V7.23501C0.193715 7.23501 -0.500244 7.92897 -0.500244 8.78501H1.49976ZM1.04976 8.33501C1.29828 8.33501 1.49976 8.53648 1.49976 8.78501H-0.500244C-0.500244 9.64105 0.193713 10.335 1.04976 10.335V8.33501ZM2.34976 8.33501H1.04976V10.335H2.34976V8.33501ZM1.89976 8.78501C1.89976 8.53648 2.10123 8.33501 2.34976 8.33501V10.335C3.2058 10.335 3.89976 9.64105 3.89976 8.78501H1.89976ZM14.871 15.0716C15.4763 14.4663 15.4763 13.4849 14.871 12.8796L13.4568 14.2938C13.281 14.118 13.281 13.8331 13.4568 13.6574L14.871 15.0716ZM12.679 15.0716C13.2843 15.6769 14.2657 15.6769 14.871 15.0716L13.4568 13.6574C13.6325 13.4817 13.9174 13.4817 14.0932 13.6574L12.679 15.0716ZM11.7597 14.1524L12.679 15.0716L14.0932 13.6574L13.1739 12.7381L11.7597 14.1524ZM11.7597 11.9603C11.1544 12.5656 11.1544 13.547 11.7597 14.1524L13.1739 12.7381C13.3497 12.9139 13.3497 13.1988 13.1739 13.3745L11.7597 11.9603ZM13.9517 11.9603C13.3464 11.355 12.365 11.355 11.7597 11.9603L13.1739 13.3745C12.9982 13.5503 12.7133 13.5503 12.5375 13.3745L13.9517 11.9603ZM14.871 12.8796L13.9517 11.9603L12.5375 13.3745L13.4568 14.2938L14.871 12.8796ZM3.84017 4.67708C3.66443 4.50135 3.66443 4.21642 3.84017 4.04069L5.25438 5.4549C5.85969 4.84959 5.85969 3.86818 5.25438 3.26287L3.84017 4.67708ZM2.92093 3.75785L3.84017 4.67708L5.25438 3.26287L4.33514 2.34363L2.92093 3.75785ZM3.55732 3.75785C3.38159 3.93358 3.09666 3.93358 2.92093 3.75785L4.33514 2.34363C3.72983 1.73832 2.74842 1.73832 2.14311 2.34363L3.55732 3.75785ZM3.55732 3.12145C3.73306 3.29719 3.73306 3.58211 3.55732 3.75785L2.14311 2.34363C1.5378 2.94894 1.5378 3.93035 2.14311 4.53566L3.55732 3.12145ZM4.47656 4.04069L3.55732 3.12145L2.14311 4.53566L3.06235 5.4549L4.47656 4.04069ZM3.84017 4.04069C4.0159 3.86495 4.30083 3.86495 4.47656 4.04069L3.06235 5.4549C3.66766 6.06021 4.64907 6.06021 5.25438 5.4549L3.84017 4.04069ZM2.143 15.0858C2.74831 15.6911 3.72972 15.6911 4.33503 15.0858L2.92082 13.6716C3.09655 13.4958 3.38148 13.4958 3.55721 13.6716L2.143 15.0858ZM2.143 12.8937C1.53769 13.4991 1.53769 14.4805 2.143 15.0858L3.55721 13.6716C3.73295 13.8473 3.73295 14.1322 3.55721 14.308L2.143 12.8937ZM3.06224 11.9745L2.143 12.8937L3.55721 14.308L4.47645 13.3887L3.06224 11.9745ZM5.25427 11.9745C4.64896 11.3692 3.66755 11.3692 3.06224 11.9745L4.47645 13.3887C4.30072 13.5645 4.01579 13.5645 3.84005 13.3887L5.25427 11.9745ZM5.25427 14.1665C5.85958 13.5612 5.85958 12.5798 5.25427 11.9745L3.84005 13.3887C3.66432 13.213 3.66432 12.9281 3.84005 12.7523L5.25427 14.1665ZM4.33503 15.0858L5.25427 14.1665L3.84005 12.7523L2.92082 13.6716L4.33503 15.0858ZM12.538 4.05516C12.7137 3.87942 12.9987 3.87942 13.1744 4.05516L11.7602 5.46937C12.3655 6.07468 13.3469 6.07468 13.9522 5.46937L12.538 4.05516ZM13.4572 3.13592L12.538 4.05516L13.9522 5.46937L14.8715 4.55013L13.4572 3.13592ZM13.4572 3.77231C13.2815 3.59658 13.2815 3.31165 13.4572 3.13592L14.8715 4.55013C15.4768 3.94482 15.4768 2.96341 14.8715 2.3581L13.4572 3.77231ZM14.0936 3.77231C13.9179 3.94805 13.633 3.94805 13.4572 3.77231L14.8715 2.3581C14.2661 1.75279 13.2847 1.75279 12.6794 2.3581L14.0936 3.77231ZM13.1744 4.69155L14.0936 3.77231L12.6794 2.3581L11.7602 3.27734L13.1744 4.69155ZM13.1744 4.05516C13.3501 4.23089 13.3501 4.51582 13.1744 4.69155L11.7602 3.27734C11.1549 3.88265 11.1549 4.86406 11.7602 5.46937L13.1744 4.05516Z"
        fill="currentColor"
        mask="url(#path-1-inside-1)"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0.5 0.714844)"
        />
      </clipPath>
    </defs>
  </svg>
);

Brightness.defaultProps = {
  color: '#5D6D7E',
};

Brightness.propTypes = {
  color: PropTypes.string,
};

export default Brightness;