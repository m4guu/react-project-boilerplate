import {
  QueryKey,
  useInfiniteQuery as useRQInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';

import { AxiosInfiniteQueriesType, queries } from 'api/actions';
import { DataForQuery, GetQueryParams } from 'api/types/types';
import { useSafeContext } from '../useSafeContext/useSafeContext.hook';
import { ApiClientContext } from '../../context/api/client/apiClientContext/apiClientContext';
import { Error } from '../../shared/types';

export const useInfiniteQuery = <Key extends keyof AxiosInfiniteQueriesType, TError = Error>(
  query: Key,
  args?: GetQueryParams<Key>,
  options?: UseInfiniteQueryOptions<DataForQuery<Key>, TError>,
) => {
  const { service } = useSafeContext(ApiClientContext);
  const queryFn = queries[query](service);
  const queryKey: QueryKey = [query];

  return useRQInfiniteQuery(
    queryKey,
    async ({ pageParam }: { pageParam?: string }) => await queryFn({ pageParam, ...(args || {}) }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options as any,
  ) as UseInfiniteQueryResult<DataForQuery<Key>, TError>;
};
