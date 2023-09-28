import { Link, Outlet } from 'react-router-dom';
import { Typography } from '@mui/material';

import { AppRoute } from '../../routes/AppRoute.enum';
import KshLightLogo from 'assets/images/ksh-logo-light.svg';
import KshLightLogo2 from 'assets/images/ksh-logo-light-2.svg';

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
        <img src={KshLightLogo} alt="logo" />
        <img src={KshLightLogo2} alt="logo" />
      </main>
    </>
  );
};
