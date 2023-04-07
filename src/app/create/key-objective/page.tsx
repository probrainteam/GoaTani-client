'use client';

import Mandalart from '@/components/mandalart';
import { MandalartType } from '@/types/mandalart';

const DUMMY_DATA: MandalartType = {
  mainContent: {
    id: 1,
    content: 'Key Objective',
  },
  subContents: [
    {
      id: 2,
      content: 'Sub Objective 1',
    },
    {
      id: 3,
      content: 'Sub Objective 1',
    },
    {
      id: 4,
      content: 'Sub Objective 1',
    },
    {
      id: 5,
      content: 'Sub Objective 1',
    },
    {
      id: 6,
      content: 'Sub Objective 1',
    },
    {
      id: 7,
      content: 'Sub Objective 1',
    },
    {
      id: 8,
      content: 'Sub Objective 1',
    },
    {
      id: 9,
      content: 'Sub Objective 1',
    },
  ],
};
function KeyObjectivePage() {
  return (
    <div>
      <Mandalart mainContent={DUMMY_DATA.mainContent} subContents={DUMMY_DATA.subContents} theme={'secondary'} />
    </div>
  );
}

export default KeyObjectivePage;
