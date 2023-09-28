import { MaterialUISwitch } from 'components/ThemeSwitcher/ThemeSwitcher.styles';
import { useTheme } from 'hooks';
import { ThemeMode } from 'shared/enums';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    theme === ThemeMode.light ? setTheme(ThemeMode.dark) : setTheme(ThemeMode.light);
  };

  return <MaterialUISwitch onChange={toggleTheme} />;
};
