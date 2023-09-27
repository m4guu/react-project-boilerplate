import { Fragment } from 'react';

import { AppLocale } from '../../context/locale/AppLocale.enum';
import { useAuth, useLocale, useTheme, useUsers } from 'hooks';
import { AppMessages } from '../../i18n/messages';
import { ThemeMode } from 'shared/enums';

export const Home: React.FC = () => {
  const { formatMessage, locale, setLocale } = useLocale();
  const { theme, setTheme } = useTheme();
  const { login } = useAuth();

  const {
    data: usersResponse,
    isFetching: isFetchingUsers,
    isFetched: areUsersFetched,
    hasNextPage: hasMoreUsers,
    fetchNextPage: loadMoreUsers,
    isFetchingNextPage,
  } = useUsers();

  return (
    <>
      <h2>home</h2>
      <p>{formatMessage({ id: AppMessages['home.helloWorld'] })}</p>
      <button onClick={() => setLocale(locale === AppLocale.pl ? AppLocale.en : AppLocale.pl)}>change language</button>

      <div>
        <p>List of users &#129489;</p>
        <div style={{ marginBottom: '2rem' }}>
          <ul>
            {areUsersFetched &&
              usersResponse?.pages?.map((page, index) => (
                <Fragment key={index}>{page.users?.map((user) => <li key={user.id}>User {user.id}</li>)}</Fragment>
              ))}
          </ul>
          {isFetchingNextPage && <p>Loading more users...</p>}
          <button disabled={isFetchingNextPage || isFetchingUsers || !hasMoreUsers} onClick={() => loadMoreUsers()}>
            Load more
          </button>
        </div>

        <div>
          <p>Users Auth</p>
          <button onClick={() => login({ username: 'username', password: 'password' })}>Click to login</button>
        </div>

        <div>
          <p>Theme Mode</p>
          <p>Actual: {theme}</p>
          <button onClick={() => setTheme(ThemeMode.dark)}>dark mode</button>
          <button onClick={() => setTheme(ThemeMode.light)}>light mode</button>
        </div>
      </div>
    </>
  );
};
