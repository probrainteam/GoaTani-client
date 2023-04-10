export interface MandalartTileType {
  id: string;
  content: string;
}

export interface MandalartPartType {
  mainContent: MandalartTileType;
  subContents: MandalartTileType[];

  // mainColor: string; // 필요한가?
  // subColor: string;
}

export type MandalartThemeType = 'primary' | 'secondary';
export interface MandalartThemeItemType {
  bg: string;
  mainBgColor: string;
  mainTextColor: string;
  subBgColor: string;
  subTextColor: string;
}

export interface MandalartTotalType {
  mainContent: MandalartPartType;
  subContents: MandalartPartType[];
}
