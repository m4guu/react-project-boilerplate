import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { LocaleContextController } from '../context/locale/localeContextController/LocaleContextController';
import { ApiClientContextController } from '../context/api/client/apiClientContextController/apiClientContextController';
import { AuthContextController } from '../context/auth/authContextController/AuthContextController';

export const AppProviders: React.FCWithChildren = ({ children }) => {
  return (
    <React.StrictMode>
      <LocaleContextController>
        <ApiClientContextController>
          <AuthContextController>
            <Router>{children}</Router>
          </AuthContextController>
        </ApiClientContextController>
      </LocaleContextController>
    </React.StrictMode>
  );
};
