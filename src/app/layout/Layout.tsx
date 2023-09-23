import { Link, Outlet } from 'react-router-dom';

import { AppRoute } from '../../routing/AppRoute.enum';

export const Layout: React.FC = () => {
  return (
    <>
      <header>REACT PROJECT TEMPLATE</header>
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
