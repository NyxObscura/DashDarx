import { SxProps, useTheme } from '@mui/material';
import { fontFamily } from 'theme/typography';
import { useMemo } from 'react';
import { graphic } from 'echarts';
import * as echarts from 'echarts/core';
import ReactEchart from 'components/base/ReactEchart';

interface CompletedTaskChartProps {
  sx?: SxProps;
}

const CompletedTaskChart = ({ ...rest }: CompletedTaskChartProps) => {
  const theme = useTheme();

  const option = useMemo(
    () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none',
        },
      },
      grid: {
        top: 30,
        bottom: 70,
        left: 30,
        right: 0,
      },
      xAxis: {
        type: 'category',
        data: ['Jan1', 'Jan8', 'Jan16', 'Jan24', 'Jan31', 'Feb1', 'Feb8', 'Feb16', 'Feb24'],
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          margin: 10,
          color: theme.palette.text.secondary,
          fontSize: theme.typography.caption.fontSize,
          fontFamily: fontFamily.monaSans,
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: theme.palette.text.secondary,
          fontSize: theme.typography.caption.fontSize,
          fontFamily: fontFamily.monaSans,
        },
        splitLine: {
          show: false,
        },
        interval: 100,
        max: 300,
      },
      series: [
        {
          data: [0, 130, 130, 300, 90, 220, 180, 240, 90],
          type: 'line',
          showSymbol: false,
          lineStyle: {
            color: theme.palette.secondary.main,
            width: 1.2,
          },
          areaStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(0, 194, 255, 0.2)',
              },
              {
                offset: 1,
                color: 'rgba(0, 194, 255, 0)',
              },
            ]),
          },
        },
      ],
    }),
    [theme],
  );

  return <ReactEchart echarts={echarts} option={option} {...rest} />;
};

export default CompletedTaskChart;
