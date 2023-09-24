import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { LocaleContextController } from '../context/locale/localeContextController/LocaleContextController';

export const AppProviders: React.FCWithChildren = ({ children }) => {
  return (
    <React.StrictMode>
      <LocaleContextController>
        <Router>{children}</Router>
      </LocaleContextController>
    </React.StrictMode>
  );
};
