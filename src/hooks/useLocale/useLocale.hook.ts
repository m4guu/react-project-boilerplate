import { useMemo } from 'react';
import { IntlShape, useIntl } from 'react-intl';

import { LocaleContext } from '../../context/locale/localeContext/LocaleContext';
import { LocaleContextValueType } from '../../context/locale/localeContext/LocaleContext.type';
import { useSafeContext } from 'hooks';

export const useLocale = (): IntlShape & LocaleContextValueType => {
  const intl = useIntl();
  const localeCtx = useSafeContext(LocaleContext);

  const locale = useMemo(
    () => ({
      ...intl,
      ...localeCtx,
    }),
    [intl, localeCtx],
  );

  return locale;
};
