import axios from 'axios';

import { apiClientUrl } from '../../config/env/env.config';
import { requestSuccessInterceptor } from '../../context/api/client/apiClientContextController/interceptors/requestInterceptor';
import {
  responsFailureInterceptor,
  responseSuccessInterceptor,
} from '../../context/api/client/apiClientContextController/interceptors/responseInterceptor';

export const axiosClientInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: apiClientUrl,
});
// AXIOS_INSTENCES

axiosClientInstance.interceptors.request.use(requestSuccessInterceptor);
axiosClientInstance.interceptors.response.use(responseSuccessInterceptor, responsFailureInterceptor);
// AXIOS_INTERCEPTORS
