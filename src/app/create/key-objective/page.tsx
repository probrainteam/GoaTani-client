'use client';

import Mandalart from '@/components/mandalart';
import { MandalartItemType } from '@/types/mandalart';
import { useState } from 'react';

const DUMMY_DATA = {
  mainContent: {
    id: '0',
    content: 'Key Objective',
  },
};

function KeyObjectivePage() {
  const [subContents, setSubContents] = useState<MandalartItemType[]>([]);
  const [input, setInput] = useState('');

  const handleAddSubContent = () => {
    if (input === '') return;

    const newSubContent = {
      id: 'sub' + (subContents[subContents.length - 1].id + 1),
      content: input,
    };

    setSubContents([...subContents, newSubContent]);
    setInput('');
  };

  const handleRemoveSubContent = (id: string) => {
    setSubContents(subContents.filter((subContent) => subContent.id !== id));
  };

  return (
    <div>
      <Mandalart
        mainContent={DUMMY_DATA.mainContent}
        subContents={subContents}
        theme={'secondary'}
        handleItemDelete={handleRemoveSubContent}
      />
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddSubContent}>추가</button>
    </div>
  );
}

export default KeyObjectivePage;
