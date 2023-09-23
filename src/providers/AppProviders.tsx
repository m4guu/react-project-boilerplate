import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const AppProviders: React.FCWithChildren = ({ children }) => {
  return (
    <React.StrictMode>
      <Router>{children}</Router>
    </React.StrictMode>
  );
};
