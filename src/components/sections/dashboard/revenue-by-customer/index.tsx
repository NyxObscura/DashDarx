import { useRef } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RateChip from 'components/chips/RateChip';
import DateSelect from 'components/dates/DateSelect';
import EChartsReactCore from 'echarts-for-react/lib/core';
import RevenueChartLegends from './RevenueChartLegends';
import RevenueChart from './RevenueChart';

export const revenueData = {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    {
      name: 'Current clients',
      data: [14000, 30000, 38000, 36000, 16000, 24000, 10000, 44000, 12000, 6000, 12000, 24000],
    },
    {
      name: 'Subscribers',
      data: [12000, 20000, 26000, 12000, 10000, 32000, 6000, 8000, 12000, 18000, 16000, 6000],
    },
    {
      name: 'New customers',
      data: [12000, 26000, 24000, 24000, 8000, 14000, 0, 38000, 14000, 30000, 16000, 28000],
    },
  ],
};

const RevenueByCustomer = () => {
  const chartRef = useRef<EChartsReactCore>(null);

  return (
    <Paper sx={{ height: { xs: 540, md: 500 } }}>
      {/* header */}
      <Typography variant="subtitle1" color="text.secondary">
        Revenue by customer type
      </Typography>

      {/* subheader */}
      <Stack justifyContent="space-between" mt={1}>
        <Stack alignItems="center" gap={0.875}>
          <Typography variant="h3" fontWeight={600} letterSpacing={1}>
            $240.8K
          </Typography>
          <RateChip rate={'14.8%'} isUp={true} />
        </Stack>

        <Stack alignItems="center" spacing={2}>
          {/* legends for bigger screen */}
          <Box display={{ xs: 'none', md: 'block' }}>
            <RevenueChartLegends chartRef={chartRef} sm={false} />
          </Box>
          <DateSelect />
        </Stack>
      </Stack>

      {/* legends for smaller screen */}
      <Box display={{ xs: 'block', md: 'none' }}>
        <RevenueChartLegends chartRef={chartRef} sm={true} />
      </Box>

      {/* stacked bar chart */}
      <Box height={400}>
        <RevenueChart chartRef={chartRef} data={revenueData} sx={{ minHeight: 1 }} />
      </Box>
    </Paper>
  );
};

export default RevenueByCustomer;
