import { stringify } from 'qs';

import { ClientService } from 'shared/types';

import {
  GetMeQueryResponse,
  GetUsersInfiniteArgs,
  GetUsersListArgs,
  GetUsersResponse,
  // QUERY_TYPE_IMPORTS
} from './auth.types';

export const authQueries = {
  getCurrentUser: (service: ClientService) => async () => {
    return await service.get<GetMeQueryResponse>('/me');
  },
  getUsersInfinite:
    (service: ClientService) =>
    async ({ pageParam = '0', count = '5' }: GetUsersInfiniteArgs) => {
      const queryParams = stringify({ page: pageParam, count: count }, { addQueryPrefix: true });
      return await service.get<GetUsersResponse>(`/users/${queryParams}`);
    },
  getUsersList:
    (service: ClientService) =>
    async ({ page = '0' }: GetUsersListArgs) => {
      const queryParams = stringify({ page, count: 5 }, { addQueryPrefix: true });
      return await service.get<GetUsersResponse>(`/users/${queryParams}`);
    },
};
