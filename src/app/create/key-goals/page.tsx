'use client';

import Button from '@/components/button';
import { Input } from '@/components/input';
import { MandalartPart } from '@/components/mandalart';
import { MandalartTileType } from '@/types/mandalart';
import { useState } from 'react';
import styled from 'styled-components';

const DUMMY_DATA = {
  mainContent: {
    id: '0',
    content: 'Key Goals',
  },
};

function KeyGoalsPage() {
  const [subContents, setSubContents] = useState<MandalartTileType[]>([]);
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
      <MandalartPart
        contents={{ mainContent: DUMMY_DATA.mainContent, subContents }}
        theme={'secondary'}
        handleItemDelete={handleRemoveSubContent}
      />
      {/* 임시 */}
      <Input type='text' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleInputKeyDown} />
      <Button size='xs' onClick={handleAddSubContent}>
        추가
      </Button>
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

export default KeyGoalsPage;
