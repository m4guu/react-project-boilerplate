import { useInfiniteQuery } from '../useInfiniteQuery/useInfiniteQuery';

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
