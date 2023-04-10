export interface MandalartTileType {
  id: string;
  content: string;
}

export type MandalartSizeType = 'sm' | 'md';

export interface MandalartPartType {
  mainContent: MandalartTileType;
  subContents: MandalartTileType[];
}

export type MandalartThemeType = 'primary' | 'secondary';
export type MandalartTileTheme = 'primary' | 'lighten' | 'white';

export type MandalartTileThemeItemType = {
  bg: string;
  text: string;
};

export interface MandalartThemeItemType {
  bg: string;
  mainBgColor: string;
  mainTextColor: string;
  subBgColor: string;
  subTextColor: string;
}

export interface MandalartFullType {
  mainContent: MandalartPartType;
  subContents: MandalartPartType[];
}
