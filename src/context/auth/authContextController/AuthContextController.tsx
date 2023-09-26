import { useCallback, useEffect, useMemo, useReducer } from 'react';

import { resetTokens, setTokens } from '../authActionCreators/authActionCreators';
import { AuthContext } from '../authContext/AuthContext';
import { AuthContextValue } from '../authContext/AuthContext.type';
import { authReducer } from '../authReducer/authReducer';
import { authStorage } from '../authStorage/AuthStorage';
import { useMutation, useUser } from 'hooks';

export const AuthContextController: React.FCWithChildren = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    accessToken: authStorage.accessToken,
    refreshToken: authStorage.refreshToken,
    expires: authStorage.expires,
  });

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

  useEffect(() => {
    authStorage.accessToken = state.accessToken;
    authStorage.refreshToken = state.refreshToken;
    authStorage.expires = state.expires;
  }, [state]);

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
