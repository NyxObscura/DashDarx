import { PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      component="main"
      alignItems="center"
      justifyContent="center"
      px={1}
      py={7}
      width={1}
      minHeight={'100vh'}
    >
      <Paper sx={{ py: 4, width: 1, maxWidth: 460 }}>{children}</Paper>
    </Stack>
  );
};

export default AuthLayout;
