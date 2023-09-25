import { useCallback, useMemo, useReducer } from 'react';

import { AuthContext } from '../authContext/AuthContext';
import { authReducer } from '../authReducer/authReducer';
import { resetTokens, setTokens } from '../authActionCreators/authActionCreators';
import { useMutation } from '../../../hooks/useMutation/useMutation.hook';
import { useUser } from '../../../hooks/useUser/useUser.hook';
import { AuthContextValue } from '../authContext/AuthContext.type';
import { AuthState } from '../authReducer/authReducer.types';

// TODO: change dummy initial state
const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  expires: null,
};

export const AuthContextController: React.FCWithChildren = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const { mutateAsync: login, isLoading: isAuthenticating } = useMutation('loginMutation', {
    onSuccess: (res) => {
      dispatch(
        setTokens({
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
          expires: res.expires,
        }),
      );
    },
    onError: () => {
      dispatch(resetTokens());
      resetUser();
    },
  });
  // LOGIN

  const {
    data: user,
    isLoadingAndEnabled,
    isSuccess: isUserSuccess,
    remove: resetUser,
  } = useUser({
    enabled: !!state.accessToken,
    onError: () => {
      dispatch(resetTokens());
    },
  });
  // CURRENT USER

  const logout = useCallback(() => {
    resetUser(), dispatch(resetTokens());
  }, [resetUser]);
  // LOGOUT

  const value: AuthContextValue = useMemo(
    () => ({
      ...state,
      isAuthenticating: isAuthenticating || isLoadingAndEnabled,
      isAuthenticated: isUserSuccess,
      login,
      logout,
      user,
    }),
    [state, isAuthenticating, isUserSuccess, isLoadingAndEnabled, login, logout, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
