import { fontFamily } from 'theme/typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';
import RateChip from 'components/chips/RateChip';

interface TopCardProps {
  icon: string;
  title: string;
  value: string;
  rate: string;
  isUp: boolean;
}

const TopCard = (props: TopCardProps) => {
  const { icon, title, value, rate, isUp } = props;

  return (
    <Grid item xs={12} sm={6} xl={3}>
      <Stack
        p={2.25}
        pl={2.5}
        direction="column"
        component={Paper}
        gap={1.5}
        height={116}
        width={1}
      >
        <Stack justifyContent="space-between">
          <Stack alignItems="center" gap={1}>
            <IconifyIcon icon={icon} color="primary.main" fontSize="h5.fontSize" />
            <Typography variant="subtitle2" color="text.secondary" fontFamily={fontFamily.workSans}>
              {title}
            </Typography>
          </Stack>

          <IconButton
            aria-label="menu"
            size="small"
            sx={{ color: 'neutral.light', fontSize: 'h5.fontSize' }}
          >
            <IconifyIcon icon="solar:menu-dots-bold" />
          </IconButton>
        </Stack>

        <Stack alignItems="center" gap={0.875}>
          <Typography variant="h3" fontWeight={600} letterSpacing={1}>
            {value}
          </Typography>
          <RateChip rate={rate} isUp={isUp} />
        </Stack>
      </Stack>
    </Grid>
  );
};

export default TopCard;
