import { createRoot } from 'react-dom/client';

import { AppProviders } from './providers/AppProviders';
import { AppRoutes } from './routing/AppRoutes';

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(
  <AppProviders>
    <AppRoutes />
  </AppProviders>,
);
