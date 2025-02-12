import { useState } from 'react';
import { revenueData } from './index';
import Stack from '@mui/material/Stack';
import EChartsReactCore from 'echarts-for-react/lib/core';
import RevenueChartLegend from './RevenueChartLegend';

interface LegendsProps {
  chartRef: React.RefObject<EChartsReactCore>;
  sm?: boolean; // check smaller screen or not
}

const legendsData = [
  {
    id: 1,
    type: 'Current clients',
  },
  {
    id: 2,
    type: 'Subscribers',
  },
  {
    id: 3,
    type: 'New customers',
  },
];

const RevenueChartLegends = ({ chartRef, sm }: LegendsProps) => {
  const [toggleColor, setToggleColor] = useState({
    currentClients: true,
    subscribers: true,
    newCustomers: true,
  });

  const handleLegendToggle = (seriesName: string) => {
    const echartsInstance = chartRef.current?.getEchartsInstance();
    if (!echartsInstance) return;

    if (seriesName === 'Current clients') {
      setToggleColor({ ...toggleColor, currentClients: !toggleColor.currentClients });
    } else if (seriesName === 'Subscribers') {
      setToggleColor({ ...toggleColor, subscribers: !toggleColor.subscribers });
    } else if (seriesName === 'New customers') {
      setToggleColor({ ...toggleColor, newCustomers: !toggleColor.newCustomers });
    }

    const option = echartsInstance.getOption() as echarts.EChartsOption;

    if (Array.isArray(option.series)) {
      const series = option.series.map((s) => {
        if (s.name === seriesName && s.type === 'bar') {
          const isBarVisible = (s.data as number[]).some((value) => value !== 0);
          return {
            ...s,
            data: isBarVisible
              ? (s.data as number[]).map(() => 0)
              : revenueData.series.find((s) => s.name === seriesName)?.data || [],
          };
        }
        return s;
      });
      echartsInstance.setOption({ series });
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent={sm ? 'center' : 'flex-start'}
      spacing={2}
      pt={sm ? 3 : 0}
      width={sm ? 1 : 'auto'}
    >
      {legendsData.map((item) => (
        <RevenueChartLegend
          key={item.id}
          data={item}
          toggleColor={toggleColor}
          handleLegendToggle={handleLegendToggle}
        />
      ))}
    </Stack>
  );
};

export default RevenueChartLegends;
