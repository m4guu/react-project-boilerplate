import { QueryKey, UseQueryOptions, UseQueryResult, useQuery as useRQQuery } from '@tanstack/react-query';

import { AxiosQueriesType, queries } from '../../api/actions';
import { DataForQuery, GetQueryParams } from '../../api/types/types';
import { parseQueryKey } from '../../utils/parseQueryKey';
import { useApiClient } from 'hooks';
import { Error } from 'shared/types';

export const useQuery = <Key extends keyof AxiosQueriesType, TError = Error>(
  query: Key,
  args: GetQueryParams<Key>,
  options?: UseQueryOptions<DataForQuery<Key>, TError>,
) => {
  const { service } = useApiClient();
  const queryFn = queries[query](service);
  const queryKey: QueryKey = parseQueryKey(query, args);

  const result = useRQQuery(
    queryKey,
    async () => await queryFn(args),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options as any,
  ) as UseQueryResult<DataForQuery<Key>, TError>;

  return { ...result, isLoadingAndEnabled: result.isLoading && result.fetchStatus !== 'idle' };
};
