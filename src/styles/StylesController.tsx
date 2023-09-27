import { useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline, StyledEngineProvider, ThemeOptions } from '@mui/material';

import { palette } from 'styles/palette/palette';
import { useTheme } from 'hooks';
import { ThemeMode } from 'shared/enums';

export const StylesController: React.FCWithChildren = ({ children }) => {
  const { theme: themeMode } = useTheme();

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette:
        themeMode === ThemeMode.light
          ? { ...palette.light, mode: ThemeMode.light }
          : { ...palette.dark, mode: ThemeMode.dark },
    }),
    [themeMode],
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
