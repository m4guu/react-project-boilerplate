import { useInfiniteQuery } from 'hooks';

export const useUsers = () => {
  return useInfiniteQuery(
    'getUsersInfinite',
    {},
    {
      getNextPageParam: ({ nextPage }) => {
        return nextPage;
      },
    },
  );
};
