import { useSafeContext } from 'hooks';
import { ThemeContext } from 'context/theme/themeContext/ThemeContext';

export const useTheme = () => useSafeContext(ThemeContext);
