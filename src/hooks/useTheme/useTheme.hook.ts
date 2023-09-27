import { useLocalStorage } from 'hooks';
import { LocalStorageKey, ThemeMode } from 'shared/enums';
import { defaultTheme } from 'config/env/env.config';

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage<ThemeMode>(LocalStorageKey.theme, defaultTheme);

  return { theme, setTheme };
};
