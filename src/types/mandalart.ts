export interface MandalartType {
  mainContent: MandalartItemType;
  subContents: MandalartItemType[];

  // mainColor: string; // 필요한가?
  // subColor: string;
}

export interface MandalartItemType {
  id: string;
  content: string;
}

export type MandalartThemeType = 'primary' | 'secondary';
export interface MandalartThemeItemType {
  bg: string;
  mainBgColor: string;
  mainTextColor: string;
  subBgColor: string;
  subTextColor: string;
}
