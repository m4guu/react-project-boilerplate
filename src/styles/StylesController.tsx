import { useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline, StyledEngineProvider, ThemeOptions } from '@mui/material';

import { palette } from 'styles/palette/palette';
import { typography } from 'styles/typography/typography';
import { useTheme } from 'hooks';
import { ThemeMode } from 'shared/enums';
import { customShadows } from 'styles/customShadows/customShadows';
import { breakpoints } from 'styles/breakpoints/breakpoints';

export const StylesController: React.FCWithChildren = ({ children }) => {
  const { theme: themeMode } = useTheme();

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette:
        themeMode === ThemeMode.light
          ? { ...palette.light, mode: ThemeMode.light }
          : { ...palette.dark, mode: ThemeMode.dark },
      typography,
      customShadows,
      breakpoints: breakpoints,
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
