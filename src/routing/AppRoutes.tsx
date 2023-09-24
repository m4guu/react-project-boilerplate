import { Route, Routes } from 'react-router-dom';

import { Home } from '../app/home/Home';
import { About } from '../app/about/About';
import { Help } from '../app/help/Help';
import { User } from '../app/user/User';
import { UsersList } from '../app/usersList/UsersList';
import { Login } from '../app/login/Login';
import { Layout } from '../app/layout/Layout';

import { AppRoute } from './AppRoute.enum';
import { PrivateRoute } from './PrivateRoute';

export const AppRoutes: React.FC = () => {
  // TODO: get user from context when UserContext will be created
  const user = '';

  return (
    <Routes>
      <Route path={AppRoute.home} element={<Layout />}>
        {/*   routes */}
        <Route path={AppRoute.home} element={<Home />} />
        <Route path={AppRoute.about} element={<About />} />
        <Route path={AppRoute.help} element={<Help />} />
        <Route path={AppRoute.users} element={<UsersList />} />
        <Route path={AppRoute.login} element={<Login />} />
        {/*  private routes */}
        <Route
          path={AppRoute.user}
          element={
            <PrivateRoute isAuthenticated={!!user}>
              <User />
            </PrivateRoute>
          }
        />
        {/*  absolute path route */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
