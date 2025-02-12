import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import RateChip from 'components/chips/RateChip';
import DateSelect from 'components/dates/DateSelect';
import IconifyIcon from 'components/base/IconifyIcon';
import CompletedTaskChart from './CompletedTaskChart';

const CompletedTask = () => {
  return (
    <Paper sx={{ height: 300 }}>
      {/* header */}
      <Stack alignItems="center" spacing={0.6}>
        <IconifyIcon icon="ph:clock-fill" color="text.secondary" fontSize="h6.fontSize" />
        <Typography variant="body2" color="text.secondary">
          Completed tasks over time
        </Typography>
      </Stack>

      <Stack mt={1.5} alignItems="center" justifyContent="space-between">
        <Stack alignItems="center" gap={0.875}>
          <Typography variant="h3" fontWeight={600} letterSpacing={1}>
            257
          </Typography>
          <RateChip rate={'16.8%'} isUp={true} />
        </Stack>

        <DateSelect />
      </Stack>

      {/* line chart */}
      <Box height={220}>
        <CompletedTaskChart sx={{ height: '100% !important' }} />
      </Box>
    </Paper>
  );
};

export default CompletedTask;
