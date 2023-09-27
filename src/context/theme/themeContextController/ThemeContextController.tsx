import { ThemeContextValue } from '../themeContext/ThemeContext.types';
import { ThemeContext } from '../themeContext/ThemeContext';
import { useLocalStorage } from 'hooks';
import { LocalStorageKey, ThemeMode } from 'shared/enums';
import { defaultTheme } from 'config/env/env.config';

export const ThemeContextController: React.FCWithChildren = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<ThemeMode>(LocalStorageKey.theme, defaultTheme);

  const value: ThemeContextValue = { theme, setTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
