import { FC, PropsWithChildren } from 'react';

export declare module 'react' {
  interface FCWithChildren<P = object> extends FC<PropsWithChildren<P>> {}
}
