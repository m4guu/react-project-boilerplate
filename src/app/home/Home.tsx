import { Fragment } from 'react';

import { AppLocale } from '../../context/locale/AppLocale.enum';
import { useLocale } from '../../hooks/useLocale/useLocale.hook';
import { useUsers } from '../../hooks/useUsers/useUsers.hook';
import { AppMessages } from '../../i18n/messages';

export const Home: React.FC = () => {
  const { formatMessage, locale, setLocale } = useLocale();

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
      </div>
    </>
  );
};
