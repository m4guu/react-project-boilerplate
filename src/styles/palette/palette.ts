import { Palette } from '@mui/material/styles';

const GREY = {
  // NEUTRAL LIGHT
  tint_1: '#F0F0F0',
  tint_2: '#CDCDCD',
  tint_3: '#BAB9B9',
  tint_4: '#A5A5A4',
  tint_5: '#929191',
  tint_6: '#7F7E7E',

  main: '#4D4D4D',

  // NEUTRAL DARK
  shade_1: '#282828',
  shade_2: '#3A3A39',
  shade_3: '#474646',
  shade_4: '#555555',
  shade_5: '#646464',
  shade_6: '#757474',

  main_dark: '#929191',
};

const THEME_BACKGROUND = {
  light: '#F9F9F9',
  dark: '#1C1C1C',
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  theme_background: THEME_BACKGROUND,
  custom_grey: GREY,
  divider: GREY.main,
};

export const palette: { light: Palette; dark: Palette } = {
  light: {
    ...COMMON,
    background: { paper: COMMON.common.white, default: THEME_BACKGROUND.light },
    others: {
      icon_color: COMMON.common.black,
      border_color: GREY.tint_1,
      background: COMMON.common.white,
    },
  },
  dark: {
    ...COMMON,
    background: {
      paper: THEME_BACKGROUND.dark,
      default: THEME_BACKGROUND.dark,
    },
    others: {
      icon_color: COMMON.common.black,
      border_color: GREY.tint_1,
      background: COMMON.common.white,
    },
  },
};
