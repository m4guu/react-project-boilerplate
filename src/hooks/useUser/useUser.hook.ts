import { UseQueryOptions } from '@tanstack/react-query';

import { useQuery } from '../useQuery/useQuery.hook';
import { GetMeQueryResponse } from '../../api/actions/auth/auth.types';

export const useUser = (options?: UseQueryOptions<GetMeQueryResponse>) => {
  return useQuery('getCurrentUser', options);
};
