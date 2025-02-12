import { fontFamily } from 'theme/typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'components/base/Image';

interface ProductInfoProps {
  data: {
    imageUrl: string;
    name: string;
    inStock: number | string;
    price: number | string;
  };
}

const Product = ({ data }: ProductInfoProps) => {
  const { imageUrl, name, inStock, price } = data;

  return (
    <Stack alignItems="center" justifyContent="space-between">
      <Stack spacing={2} alignItems="center">
        <Box height={46} width={46} bgcolor="info.dark" borderRadius={1.25}>
          <Image src={imageUrl} height={1} width={1} sx={{ objectFit: 'contain' }} />
        </Box>

        <Stack direction="column">
          <Typography variant="body2" fontWeight={600}>
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            {inStock} in stock
          </Typography>
        </Stack>
      </Stack>

      <Typography variant="caption" fontWeight={400} fontFamily={fontFamily.workSans}>
        $ {price}
      </Typography>
    </Stack>
  );
};

export default Product;
