function pxToRem(value: number) {
  return `${value / 10}rem`;
}

function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:320px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:480px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = 'Kanit, sans-serif';
const FONT_SECONDARY = 'Roboto Serif, serif';

export const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightExtraLight: 200,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: '117%',
    fontSize: pxToRem(68),
    letterSpacing: '1%',
    ...responsiveFontSizes({ sm: 50, md: 50, lg: 68 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: '128%',
    fontSize: pxToRem(50),
    letterSpacing: '1%',
    ...responsiveFontSizes({ sm: 38, md: 38, lg: 50 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: '125%',
    fontSize: pxToRem(38),
    letterSpacing: '1%',
    ...responsiveFontSizes({ sm: 28, md: 28, lg: 38 }),
  },
  h4: {
    fontWeight: 600,
    lineHeight: '116%',
    fontSize: pxToRem(28),
    letterSpacing: '1%',
    ...responsiveFontSizes({ sm: 22, md: 22, lg: 28 }),
  },
  h5: {
    fontWeight: 600,
    lineHeight: '145%',
    fontSize: pxToRem(22),
    letterSpacing: '1%',
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 22 }),
  },
  h6: {
    fontWeight: 600,
    lineHeight: '134%',
    fontSize: pxToRem(18),
    letterSpacing: 0,
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 18 }),
  },
  button: {
    fontWeight: 600,
    lineHeight: '148%',
    fontSize: pxToRem(16),
    letterSpacing: 0,
  },
  link: {
    fontWeight: 600,
    lineHeight: '148%',
    fontSize: pxToRem(16),
    letterSpacing: 0,
  },
  label: {
    fontWeight: 400,
    lineHeight: '117%',
    fontSize: pxToRem(14),
    letterSpacing: 0,
    ...responsiveFontSizes({ sm: 12, md: 12, lg: 14 }),
  },
  p: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 400,
    fontSize: pxToRem(9),
    lineHeight: '150%',
    letterSpacing: 0,
  },
} as const;
