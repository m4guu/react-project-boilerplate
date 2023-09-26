import { AuthContext } from '../../context/auth/authContext/AuthContext';
import { useSafeContext } from 'hooks';

export const useAuth = () => useSafeContext(AuthContext);
