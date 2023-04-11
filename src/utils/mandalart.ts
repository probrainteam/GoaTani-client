import { MandalartTileType } from '@/types/mandalart';

const EMPTY_ARRAY = new Array(8).fill(0);

export const getFilledSubContents = (subContents: MandalartTileType[]): MandalartTileType[] => {
  return EMPTY_ARRAY.map((_, i) => {
    if (i < subContents.length) {
      return subContents[i];
    }
    return { id: 'empty' + i, content: '' };
  });
};

export const getFilterRecommendedSubContents = (
  recommendedContents: string[],
  mandalartContents: MandalartTileType[],
): string[] => {
  const mandalartContentList = mandalartContents.map((mandalartContent) => mandalartContent.content);

  return recommendedContents.filter((recommendedContent) => {
    return !mandalartContentList.includes(recommendedContent);
  });
};
