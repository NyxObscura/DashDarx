import { fontFamily } from 'theme/typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import iPhone from 'assets/images/iPhone.png';
import AWS8 from 'assets/images/AWS8.png';
import Product from './Product';

const productsData = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    imageUrl: iPhone,
    inStock: 524,
    price: '1,099.00',
  },
  {
    id: 2,
    name: 'Apple Watch S8',
    imageUrl: AWS8,
    inStock: 320,
    price: '799.00',
  },
];

const Products = () => {
  return (
    <Stack direction="column" gap={3.75} component={Paper} height={300}>
      <Typography variant="h6" fontWeight={400} fontFamily={fontFamily.workSans}>
        Products
      </Typography>

      <Stack justifyContent="space-between">
        <Typography variant="caption" fontWeight={400}>
          Products
        </Typography>
        <Typography variant="caption" fontWeight={400}>
          Price
        </Typography>
      </Stack>

      {productsData.map((item) => {
        return <Product key={item.id} data={item} />;
      })}
    </Stack>
  );
};

export default Products;
