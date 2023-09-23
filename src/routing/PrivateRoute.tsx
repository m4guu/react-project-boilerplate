import { Navigate, RouteProps } from 'react-router-dom';

import { AppRoute } from './AppRoute.enum';

type PrivateRouteProps = RouteProps & {
  isAuthenticated: boolean;
  //... here you can add other authorisation-related properties
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated, children }) => {
  const isAuthorized = isAuthenticated;

  if (!isAuthorized) {
    return <Navigate to={AppRoute.login} replace />;
  }

  return children;
};
