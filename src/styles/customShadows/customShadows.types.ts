export interface CustomShadows {
  primary: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadows;
  }

  // ALLOW CONFIGURATION USING `createTheme`
  interface ThemeOptions {
    customShadows?: Partial<CustomShadows>;
  }
  function createTheme(options?: ThemeOptions, ...args: object[]): Theme;
}
