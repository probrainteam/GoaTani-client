export interface MandalartTileType {
  id: string;
  content: string;
}

export interface MandalartPartType {
  mainContent: MandalartTileType;
  subContents: MandalartTileType[];
}

export type MandalartThemeType = 'primary' | 'secondary';
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
