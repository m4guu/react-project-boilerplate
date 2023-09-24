import { AppLocale } from '../../context/locale/AppLocale.enum';

interface ImportMetaEnv {
  readonly VITE_DEFAULT_LOCALE: AppLocale;
  readonly VITE_API_CLIENT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
