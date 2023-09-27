import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthContextController } from 'context/auth/authContextController/AuthContextController';
import { ApiClientContextController } from 'context/api/client/apiClientContextController/ApiClientContextController';
import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { StylesController } from 'styles/StylesController';
import { ThemeContextController } from 'context/theme/themeContextController/ThemeContextController';

export const AppProviders: React.FCWithChildren = ({ children }) => {
  return (
    <React.StrictMode>
      <LocaleContextController>
        <ThemeContextController>
          <ApiClientContextController>
            <AuthContextController>
              <StylesController>
                <Router>{children}</Router>
              </StylesController>
            </AuthContextController>
          </ApiClientContextController>
        </ThemeContextController>
      </LocaleContextController>
    </React.StrictMode>
  );
};
