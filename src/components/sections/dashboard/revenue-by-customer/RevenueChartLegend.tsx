import { fontFamily } from 'theme/typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

interface LegendProps {
  data: {
    id: number;
    type: string;
  };
  toggleColor: {
    currentClients: boolean;
    subscribers: boolean;
    newCustomers: boolean;
  };
  handleLegendToggle: (seriesName: string) => void;
}

const RevenueChartLegend = ({ data, toggleColor, handleLegendToggle }: LegendProps) => {
  let color = '';

  if (toggleColor.currentClients && data.type === 'Current clients') {
    color = 'primary.main';
  } else if (toggleColor.subscribers && data.type === 'Subscribers') {
    color = 'secondary.lighter';
  } else if (toggleColor.newCustomers && data.type === 'New customers') {
    color = 'secondary.light';
  } else {
    color = 'text.secondary';
  }

  return (
    <ButtonBase onClick={() => handleLegendToggle(data.type)} disableRipple>
      <Stack spacing={0.5} alignItems="center">
        <Box height={8} width={8} bgcolor={color} borderRadius={1} />
        <Typography variant="body2" color="text.secondary" fontFamily={fontFamily.workSans}>
          {data.type}
        </Typography>
      </Stack>
    </ButtonBase>
  );
};

export default RevenueChartLegend;
