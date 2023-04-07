export interface MandalartType {
  mainContent: MandalartItemType;
  subContents: MandalartItemType[];

  // mainColor: string; // 필요한가?
  // subColor: string;
}

export interface MandalartItemType {
  id: number;
  content: string;
}
