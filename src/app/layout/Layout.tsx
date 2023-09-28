import { Outlet } from 'react-router-dom';

import { Header } from 'app/layout/views/Header/Header';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
