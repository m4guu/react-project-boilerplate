import {
  UseMutationResult,
  useMutation as useRQMutation,
  UseMutationOptions,
  MutationKey,
} from '@tanstack/react-query';

import { AxiosMutationsType, mutations } from 'api/actions';
import { Error } from 'shared/types';
import { useApiClient } from 'hooks';

import { DataForMutation, GetMutationParams } from './useMutation.types';

export const useMutation = <Key extends keyof AxiosMutationsType, TError = Error>(
  mutation: Key,
  options?: UseMutationOptions<DataForMutation<Key>, TError>,
) => {
  const { service } = useApiClient();
  const mutationFn = mutations[mutation](service);
  const mutationKey: MutationKey = [mutation];

  return useRQMutation(
    mutationKey,
    async (args) => await mutationFn(args),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options as any,
  ) as UseMutationResult<DataForMutation<Key>, TError, GetMutationParams<Key>>;
};
