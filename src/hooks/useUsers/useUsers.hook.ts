import { useInfiniteQuery } from '../useInfiniteQuery/useInfiniteQuery.hook';

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
