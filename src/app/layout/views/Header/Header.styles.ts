import { AppBar, Typography, List, Box } from '@mui/material';
import { styled } from '@mui/system';

export const HeaderContainer = styled(AppBar)(({ theme }) => ({
  display: 'block',
  background: theme.palette.theme_background.dark,
}));

export const Container = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Logo = styled(Typography)({
  textTransform: 'uppercase',
});

export const NavigationList = styled(List)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const Navigation = styled('nav')({});

export const LogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
}));
