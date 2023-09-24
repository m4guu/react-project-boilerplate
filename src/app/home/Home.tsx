import { AppLocale } from '../../context/locale/AppLocale.enum';
import { useLocale } from '../../hooks/useLocale/useLocale.hook';
import { AppMessages } from '../../i18n/messages';

export const Home: React.FC = () => {
  const { formatMessage, locale, setLocale } = useLocale();

  return (
    <>
      <h2>home</h2>
      <p>{formatMessage({ id: AppMessages['home.helloWorld'] })}</p>
      <button onClick={() => setLocale(locale === AppLocale.pl ? AppLocale.en : AppLocale.pl)}>change language</button>
    </>
  );
};
