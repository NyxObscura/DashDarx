import { SvgIcon, SvgIconProps } from '@mui/material';

const CheckBoxIndeterminateIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 13 12" fill="none">
      <rect x="1.26875" y="0.679883" width="11" height="11" rx="1.7" fill="" />
      <rect x="1.26875" y="0.679883" width="11" height="11" rx="1.7" stroke="" strokeWidth="0.6" />
      <g clipPath="url(#clip0_4939_57759)">
        <path
          d="M4.66895 6.0957H8.86895"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4939_57759">
          <rect width="5.6" height="5.6" fill="white" transform="translate(3.96875 3.37988)" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default CheckBoxIndeterminateIcon;
