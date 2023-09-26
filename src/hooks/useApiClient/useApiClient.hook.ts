import { useSafeContext } from 'hooks';
import { ApiClientContext } from 'context/api/client/apiClientContext/ApiClientContext';

export const useApiClient = () => useSafeContext(ApiClientContext);
