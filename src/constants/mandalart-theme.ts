import theme from '@/styles/theme';
import {
  MandalartThemeType,
  MandalartThemeItemType,
  MandalartTileTheme,
  MandalartTileThemeItemType,
  MandalartSizeType,
} from '@/types/mandalart';

export const MANDALART_THEME: Record<MandalartThemeType, MandalartThemeItemType> = {
  primary: {
    bg: theme.colors.primary[300],

    mainBgColor: theme.colors.primary[100],
    mainTextColor: theme.colors.white,

    subBgColor: theme.colors.lighten[100],
    subTextColor: theme.colors.primary[100],
  },
  secondary: {
    bg: theme.colors.lighten[300],

    mainBgColor: theme.colors.lighten[100],
    mainTextColor: theme.colors.primary[100],

    subBgColor: theme.colors.white,
    subTextColor: theme.colors.primary[100],
  },
};

export const MANDALART_TILE_THEME: Record<MandalartTileTheme, MandalartTileThemeItemType> = {
  primary: {
    bg: theme.colors.primary[100],
    text: theme.colors.white,
  },
  lighten: {
    bg: theme.colors.lighten[100],
    text: theme.colors.primary[100],
  },
  white: {
    bg: theme.colors.white,
    text: theme.colors.primary[100],
  },
};

export const MANDALART_PART_THEME: Record<
  MandalartThemeType,
  {
    main: MandalartTileTheme;
    sub: MandalartTileTheme;
  }
> = {
  primary: {
    main: 'primary',
    sub: 'lighten',
  },
  secondary: {
    main: 'lighten',
    sub: 'white',
  },
};

export const MANDALART_SIZE: Record<MandalartSizeType, number> = {
  sm: 45,
  md: 90,
};

export const MANDALART_TEXT_SIZE: Record<MandalartSizeType, number> = {
  sm: 10,
  md: 16,
};
