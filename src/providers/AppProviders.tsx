import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { LocaleContextController } from '../context/locale/localeContextController/LocaleContextController';
import { ApiClientContextController } from '../context/api/client/apiClientContextController/apiClientContextController';

export const AppProviders: React.FCWithChildren = ({ children }) => {
  return (
    <React.StrictMode>
      <LocaleContextController>
        <ApiClientContextController>
          <Router>{children}</Router>
        </ApiClientContextController>
      </LocaleContextController>
    </React.StrictMode>
  );
};
