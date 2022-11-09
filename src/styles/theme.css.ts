import { createGlobalTheme } from '@vanilla-extract/css';
import colors from 'tailwindcss/colors';

const grid = 4;
const px = (value: string | number) => `${value}px`;

const tailwindPalette = {
  white: '#fff',
  black: '#0e0e10',

  red: colors.red['500'],
  yellow: colors.yellow['300'],
  green50: colors.emerald['50'],
  green200: colors.emerald['200'],
  green300: colors.emerald['300'],
  green400: colors.emerald['400'],
  green500: colors.emerald['500'],
  green600: colors.emerald['600'],

  slate50: colors.slate['50'],
  slate100: colors.slate['100'],
  slate200: colors.slate['200'],
  slate300: colors.slate['300'],
  slate400: colors.slate['400'],
  slate500: colors.slate['500'],
  slate600: colors.slate['600'],
  slate700: colors.slate['700'],
  slate800: colors.slate['800'],
  slate900: colors.slate['900'],

  gray50: colors.gray['50'],
  gray100: colors.gray['100'],
  gray200: colors.gray['200'],
  gray300: colors.gray['300'],
  gray400: colors.gray['400'],
  gray500: colors.gray['500'],
  gray600: colors.gray['600'],
  gray700: colors.gray['700'],
  gray800: colors.gray['800'],
  gray900: colors.gray['900'],

  stone50: colors.stone['50'],
  stone100: colors.stone['100'],
  stone200: colors.stone['200'],
  stone300: colors.stone['300'],
  stone400: colors.stone['400'],
  stone500: colors.stone['500'],
  stone600: colors.stone['600'],
  stone700: colors.stone['700'],
  stone800: colors.stone['800'],
  stone900: colors.stone['900'],

  blueGray800: colors.slate['800'],
  blueGray900: colors.slate['900'],

  teal50: colors.teal['50'],
  teal100: colors.teal['100'],
  teal200: colors.teal['200'],
  teal300: colors.teal['300'],
  teal400: colors.teal['400'],
  teal500: colors.teal['500'],
  teal600: colors.teal['600'],
  teal700: colors.teal['700'],
  teal800: colors.teal['800'],
  teal900: colors.teal['900'],

  blue50: colors.sky['50'],
  blue100: colors.sky['100'],
  blue200: colors.sky['200'],
  blue300: colors.sky['300'],
  blue400: colors.sky['400'],
  blue500: colors.sky['500'],
  blue600: colors.sky['600'],
  blue700: colors.sky['700'],
  blue800: colors.sky['800'],
  blue900: colors.sky['900'],

  pink50: colors.fuchsia['50'],
  pink100: colors.fuchsia['100'],
  pink200: colors.fuchsia['200'],
  pink300: colors.fuchsia['300'],
  pink400: colors.fuchsia['400'],
  pink500: colors.fuchsia['500'],
  pink600: colors.fuchsia['600'],
  pink700: colors.fuchsia['700'],
  pink800: colors.fuchsia['800'],
  pink900: colors.fuchsia['900'],
};

export const vars = createGlobalTheme(':root', {
  fonts: {
    brand:
      'source-han-sans-japanese, "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    heading:
      'source-han-sans-japanese, BlinkMacSystemFont, "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    body: 'source-han-sans-japanese, BlinkMacSystemFont, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    code: 'ml, "Roboto Mono", Menlo, monospace',
  },
  grid: px(grid),
  spacing: {
    none: '0',
    xsmall: px(1 * grid),
    small: px(2 * grid),
    medium: px(3 * grid),
    large: px(5 * grid),
    xlarge: px(8 * grid),
    xxlarge: px(12 * grid),
    xxxlarge: px(24 * grid),
  },
  contentWidth: {
    xsmall: px(480),
    small: px(600),
    standard: px(740),
    large: px(960),
    xlarge: px(1120),
    xxlarge: px(1350),
  },
  heading: {},
  text: {},
  weight: {
    lighter: '100',
    regular: '400',
    strong: '700',
    stronger: '900',
  },
  palette: tailwindPalette,
  border: {
    width: {
      standard: px(1 * grid),
      large: px(2 * grid),
    },
    radius: {
      small: px(2 * grid),
      medium: px(4 * grid),
      large: px(7 * grid),
      full: '9999px',
    },
  },
});
