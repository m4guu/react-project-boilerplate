import { GetMeQueryResponse, LoginMutationArguments } from '../../../api/actions/auth/auth.types';

export type AuthContextValue = {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  login: ({ password, username }: LoginMutationArguments) => void;
  logout: VoidFunction;
  user: GetMeQueryResponse | undefined;
};
