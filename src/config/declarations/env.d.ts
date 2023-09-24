import { AppLocale } from '../../context/locale/AppLocale.enum';

interface ImportMetaEnv {
  readonly VITE_DEFAULT_LOCALE: AppLocale;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
