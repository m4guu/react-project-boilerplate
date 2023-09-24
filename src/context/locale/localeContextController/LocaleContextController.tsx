import { useState } from 'react';
import { IntlProvider } from 'react-intl';

import { LocaleContext } from '../localeContext/LocaleContext';
import { defaultLocale } from '../../../config/env/env.config';
import { AppLocale } from '../AppLocale.enum';
import { translations } from '../../../i18n/messages';

export const LocaleContextController: React.FCWithChildren = ({ children }) => {
  const [locale, setLocale] = useState<AppLocale>(defaultLocale);

  return (
    <IntlProvider defaultLocale={defaultLocale} locale={locale} messages={translations[locale]}>
      <LocaleContext.Provider value={{ defaultLocale, locale, setLocale }}>{children}</LocaleContext.Provider>
    </IntlProvider>
  );
};
