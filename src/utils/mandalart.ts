import { MandalartItemType } from '@/types/mandalart';

const EMPTY_ARRAY = new Array(8).fill(0);

export const getFilledSubContents = (subContents: MandalartItemType[]): MandalartItemType[] => {
  const res = EMPTY_ARRAY.map((_, i) => {
    if (i < subContents.length) {
      return subContents[i];
    }
    return { id: i + 1, content: '' };
  });

  return res;
};
