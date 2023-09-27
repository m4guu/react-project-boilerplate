import React, { ReactElement } from 'react';
import { RenderOptions, render } from '@testing-library/react';

import { AppProviders } from 'providers/AppProviders';

const _Wrapper: React.FCWithChildren = ({ children }) => {
  return <AppProviders>{children}</AppProviders>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: _Wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
