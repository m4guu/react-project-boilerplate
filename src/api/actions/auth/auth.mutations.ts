import { ClientService } from '../../../shared/types';

import {
  LoginMutationArguments,
  LoginMutationResponse,
  // MUTATION_TYPE_IMPORTS
} from './auth.types';

export const authMutations = {
  loginMutation: (service: ClientService) => async (body: LoginMutationArguments) => {
    return await service.post<LoginMutationResponse>('/authorize', body);
  },
  // MUTATION_FUNCTIONS_SETUP
};
