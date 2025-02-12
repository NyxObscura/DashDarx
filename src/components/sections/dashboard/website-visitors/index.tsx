import { useRef } from 'react';
import { fontFamily } from 'theme/typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import EChartsReactCore from 'echarts-for-react/lib/core';
import VisitorsChartLegends from './VisitorsChartLegends';
import VisitorsChart from './VisitorsChart';

const WebsiteVisitors = () => {
  const chartRef = useRef<EChartsReactCore>(null);

  return (
    <Paper sx={{ height: 500 }}>
      {/* header */}
      <Stack alignItems="center" justifyContent="space-between" mb={-2}>
        <Typography variant="h6" fontWeight={400} fontFamily={fontFamily.workSans}>
          Website Visitors
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          endIcon={<IconifyIcon icon="mingcute:arrow-down-line" />}
          sx={{ py: 0.875, zIndex: 1000 }}
        >
          Export
        </Button>
      </Stack>

      {/* polar bar chart */}
      <VisitorsChart chartRef={chartRef} />

      {/* legends */}
      <VisitorsChartLegends chartRef={chartRef} />
    </Paper>
  );
};

export default WebsiteVisitors;
