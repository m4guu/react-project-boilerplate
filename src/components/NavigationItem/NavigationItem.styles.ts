import { Link } from 'react-router-dom';
import { Typography, ListItem } from '@mui/material';
import { styled } from '@mui/system';

export const NavListItem = styled(ListItem)({});

export const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  padding: theme.spacing(1),
  '&:hover': {
    background: 'red',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textTransform: 'capitalize',
}));
