import { useSafeContext } from 'hooks';
import { AuthContext } from 'context/auth/authContext/AuthContext';

export const useAuth = () => useSafeContext(AuthContext);
