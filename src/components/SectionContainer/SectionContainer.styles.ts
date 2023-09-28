import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  width: '100%',

  [theme.breakpoints.up('md')]: {
    maxWidth: '800px',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '1052px',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1436px',
  },
  // TODO: fix mui breakpoints typing error
  [theme.breakpoints.up('xxl')]: {
    maxWidth: '1820px',
  },
}));
