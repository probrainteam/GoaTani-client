'use client';

import Heading from '@/app/create/heading';
import Badge from '@/components/badge';
import Button from '@/components/button';
import { Input } from '@/components/input';
import { MandalartPart } from '@/components/mandalart';
import { MandalartTileType } from '@/types/mandalart';
import { getFilterRecommendedSubContents } from '@/utils/mandalart';
import { setCreateStorage } from '@/utils/storage';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';

const BADGE_DUMMY = ['몸 만들기', '돈 벌기', '취업', '취미', '여행', '책 읽기', '취미2', '여행2', '책 읽기2'];

export default function KeyGoalsPage() {
  const router = useRouter();

  const [subContents, setSubContents] = useState<MandalartTileType[]>([]);
  const [input, setInput] = useState('');
  const [recommendedContents, setRecommendedContents] = useState(BADGE_DUMMY);

  const buttonDisabled = subContents.length !== 8;

  const handleAddSubContent = () => {
    if (input === '') return;
    if (subContents.length === 8) return;
    setSubContents([...subContents, input]);
    setInput('');
  };

  const handleBadgeClick = (content: string) => {
    if (subContents.length === 8) return;

    const newSubContents = [...subContents, content];

    setSubContents(newSubContents);
    setInput('');

    setRecommendedContents(getFilterRecommendedSubContents(BADGE_DUMMY, newSubContents));
  };

  const handleRemoveSubContent = (idx: number) => {
    const newSubContents = subContents.filter((_, i) => i !== idx);
    setSubContents(newSubContents);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddSubContent();
    }
  };

  const onNextClick = () => {
    setCreateStorage('key-goal', subContents);
    router.push('/create/detailed-goals');
  };

  return (
    <>
      <Wrapper>
        <Heading>
          핵심 목표를 정해주세요! <br />
          오타니 되기 까지 20%
        </Heading>
        <MandalartPart
          contents={{ mainContent: 'DUMMY_DATA', subContents }}
          theme={'primary'}
          handleItemDelete={handleRemoveSubContent}
        />
        <InputWrapper>
          <Input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInputKeyDown}
            inputSize='lg'
          />
          <InputButtonWrapper>
            <Button size='xs' onClick={handleAddSubContent}>
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
      </Wrapper>
      <ButtonWrapper>
        <Button disabled={buttonDisabled} onClick={onNextClick}>
          세부 목표 정하기
        </Button>
      </ButtonWrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  flex: 1;
  position: relative;

  padding-bottom: 100px;
`;

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
