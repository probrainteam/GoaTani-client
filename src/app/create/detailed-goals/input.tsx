import Badge from '@/components/badge';
import Button from '@/components/button';
import { Input } from '@/components/input';
import React, { useState } from 'react';
import styled from 'styled-components';

interface TileInputProps {
  initRecommendedContents: string[];

  addSubContent: (content: string) => void | null;
  removeContentIndex: (index: number) => void;
  contents: string[];
  isAllInput: boolean;
}

function TileInput({ initRecommendedContents, addSubContent, contents, isAllInput }: TileInputProps) {
  const [input, setInput] = useState('');
  // const [recommendedContents, setRecommendedContents] = useState<string[]>([]);
  const recommendedContents = initRecommendedContents.filter((content) => !contents.includes(content)) ?? [];
  const handleAddSubContent = () => {
    if (input === '') return;

    addSubContent(input);
    setInput('');
  };

  const handleBadgeClick = (content: string) => {
    const addResult = addSubContent(content);
    if (addResult) {
      setInput('');
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddSubContent();
    }
  };

  return (
    <>
      <InputWrapper>
        <Input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
          inputSize='lg'
        />
        <InputButtonWrapper>
          <Button size='xs' onClick={handleAddSubContent} disabled={isAllInput}>
            추가
          </Button>
        </InputButtonWrapper>
      </InputWrapper>
      <BadgeWrapper>
        {recommendedContents.map((content, idx) => (
          <Badge key={idx} onClick={() => handleBadgeClick(content)}>
            {content}
          </Badge>
        ))}
      </BadgeWrapper>
    </>
  );
}

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px 10px;
  width: 100%;

  ${({ theme }) => theme.typography.sm}
`;

const InputButtonWrapper = styled.div`
  width: 50px;

  position: absolute;
  right: 7px;
  top: 6px;
  bottom: 6px;

  margin: auto 0;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;

  padding: 20px;
`;

export default TileInput;
