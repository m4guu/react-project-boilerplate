import { AxiosResponse } from 'axios';

export const responseSuccessInterceptor = (response: AxiosResponse) => response;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const responsFailureInterceptor = async (error: any) => Promise.reject(error);
