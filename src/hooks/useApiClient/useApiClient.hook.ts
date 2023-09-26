import { ApiClientContext } from '../../context/api/client/apiClientContext/apiClientContext';
import { useSafeContext } from 'hooks';

export const useApiClient = () => useSafeContext(ApiClientContext);
