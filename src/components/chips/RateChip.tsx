import Chip from '@mui/material/Chip';
import IconifyIcon from 'components/base/IconifyIcon';

interface RateChipProps {
  rate: string;
  isUp: boolean;
}

const RateChip = ({ rate, isUp }: RateChipProps) => {
  return (
    <Chip
      variant="outlined"
      size="small"
      icon={
        <IconifyIcon
          icon={isUp ? 'mingcute:arrow-right-up-line' : 'mingcute:arrow-right-down-line'}
          sx={(theme) => ({
            color: isUp
              ? `${theme.palette.success.main} !important`
              : `${theme.palette.error.main} !important`,
          })}
        />
      }
      label={rate}
      sx={{
        px: 0.5,
        width: 62,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        color: isUp ? 'success.main' : 'error.main',
        bgcolor: isUp ? 'transparent.success.main' : 'transparent.error.main',
        borderColor: isUp ? 'transparent.success.main' : 'transparent.error.main',
      }}
    />
  );
};

export default RateChip;
