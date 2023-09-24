import { createContext } from 'react';

import { LocaleContextValueType } from './LocaleContext.type';

export const LocaleContext = createContext<LocaleContextValueType | undefined>(undefined);
