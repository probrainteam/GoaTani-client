'use client';

import Mandalart from '@/components/mandalart';
import { MandalartItemType } from '@/types/mandalart';
import { useState } from 'react';
import styled from 'styled-components';

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
      id: 'sub' + (subContents[subContents.length - 1]?.id + 1 ?? 'sub1'),
      content: input,
    };

    setSubContents([...subContents, newSubContent]);
    setInput('');
  };

  const handleRemoveSubContent = (id: string) => {
    setSubContents(subContents.filter((subContent) => subContent.id !== id));
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddSubContent();
    }
  };

  return (
    <Wrapper>
      <Mandalart
        mainContent={DUMMY_DATA.mainContent}
        subContents={subContents}
        theme={'secondary'}
        handleItemDelete={handleRemoveSubContent}
      />
      {/* 임시 */}
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleInputKeyDown} />
      <button onClick={handleAddSubContent}>추가</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

export default KeyObjectivePage;