import theme from '@/styles/theme';
import { MandalartThemeType, MandalartThemeItemType } from '@/types/mandalart';

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
