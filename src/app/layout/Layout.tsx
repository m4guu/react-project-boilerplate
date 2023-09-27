import { Link, Outlet } from 'react-router-dom';
import { Typography } from '@mui/material';

import { AppRoute } from '../../routes/AppRoute.enum';

export const Layout: React.FC = () => {
  return (
    <>
      <Typography variant="p">REACT PROJECT TEMPLATE</Typography>
      <nav>
        <ul>
          <li>
            <Link to={AppRoute.home}>home</Link>
          </li>
          <li>
            <Link to={AppRoute.about}>about</Link>
          </li>
          <li>
            <Link to={AppRoute.users}>users</Link>
          </li>
          <li>
            <Link to={AppRoute.help}>help</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
