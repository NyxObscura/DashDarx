import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Typography
      mt={1}
      px={1}
      pb={{ xs: 1.5, sm: 1, lg: 0 }}
      color="text.secondary"
      variant="body2"
      sx={{ textAlign: { xs: 'center', md: 'right' } }}
      letterSpacing={0.5}
    >
      Made with ❤️ by{' '}
      <Link href="https://themewagon.com/" target="_blank" rel="noreferrer">
        {'ThemeWagon'}
      </Link>
    </Typography>
  );
};

export default Footer;
