import { ListItem } from '@mui/material';

import { NavigationItemProps } from './NavigationItem.types';
import { NavLink, Title } from './NavigationItem.styles';

export const NavigationItem: React.FCWithChildren<NavigationItemProps> = ({ children, to }) => {
  return (
    <ListItem disablePadding>
      <NavLink to={to}>
        <Title>{children}</Title>
      </NavLink>
    </ListItem>
  );
};
