import { MandalartTotalType, MandalartType } from '@/types/mandalart';

export const DUMMY_MANDALART: MandalartType = {
  mainContent: {
    id: '1',
    content: 'Key Objective',
  },
  subContents: [
    {
      id: '2',
      content: 'Sub Objective 1',
    },
    {
      id: '3',
      content: 'Sub Objective 1',
    },
    {
      id: '4',
      content: 'Sub Objective 1',
    },
    {
      id: ' 5',
      content: 'Sub Objective 1',
    },
    {
      id: '6',
      content: 'Sub Objective 1',
    },
    {
      id: '7',
      content: 'Sub Objective 1',
    },
    {
      id: '8',
      content: 'Sub Objective 1',
    },
    {
      id: '9',
      content: 'Sub Objective 1',
    },
  ],
};

export const DUMMY_MANDALART_TOTAL: MandalartTotalType = {
  mainContent: DUMMY_MANDALART,
  subContents: [
    DUMMY_MANDALART,
    DUMMY_MANDALART,
    DUMMY_MANDALART,
    DUMMY_MANDALART,
    DUMMY_MANDALART,
    DUMMY_MANDALART,
    DUMMY_MANDALART,
    DUMMY_MANDALART,
  ],
};
