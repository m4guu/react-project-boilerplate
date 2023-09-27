import { AppLocale } from 'context/locale/AppLocale.enum';
import { ThemeMode } from 'shared/enums';

interface ImportMetaEnv {
  readonly VITE_DEFAULT_LOCALE: AppLocale;
  readonly VITE_DEFAULT_THEME: ThemeMode;
  readonly VITE_API_CLIENT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
