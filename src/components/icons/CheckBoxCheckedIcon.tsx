import { SvgIcon, SvgIconProps } from '@mui/material';

const CheckBoxCheckedIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 13 13" fill="none">
      <rect
        x="1.26875"
        y="0.680859"
        width="11.4"
        height="11.4"
        rx="1.7"
        fill=""
        stroke=""
        strokeWidth="0.6"
      />
      <g clipPath="url(#clip0_738_4022)">
        <path
          d="M4.77051 6.709L6.08253 8.02103L9.36259 4.74097"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_738_4022">
          <rect width="5.6" height="5.6" fill="white" transform="translate(4.2666 3.58105)" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default CheckBoxCheckedIcon;
