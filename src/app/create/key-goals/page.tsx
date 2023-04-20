'use client';

import Heading from '@/app/create/heading';
import Badge from '@/components/badge';
import Button from '@/components/button';
import { Input } from '@/components/input';
import { MandalartPart } from '@/components/mandalart';
import useMandalart from '@/hooks/use-mandalart';
import { getFilterRecommendedSubContents } from '@/utils/mandalart';
import { FULL_GOAL, KEY_GOAL, getCreateStorage, setCreateStorage } from '@/utils/storage';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const BADGE_DUMMY = ['몸 만들기', '돈 벌기', '취업', '취미', '여행', '책 읽기', '취미2', '여행2', '책 읽기2'];

export default function KeyGoalsPage() {
  const router = useRouter();

  const { addSubContent, contents, isAllInput, removeContentIndex } = useMandalart();
  const [input, setInput] = useState('');
  const [recommendedContents, setRecommendedContents] = useState(BADGE_DUMMY);

  const [mainContent, setMainContent] = useState('');
  const buttonDisabled = !isAllInput;

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

  const onNextClick = () => {
    setCreateStorage(KEY_GOAL, contents);
    router.push('/create/detailed-goals');
  };

  useEffect(() => {
    const mainContent = getCreateStorage(FULL_GOAL);
    if (mainContent) {
      setMainContent(mainContent);
    }
  }, []);

  useEffect(() => {
    setRecommendedContents(getFilterRecommendedSubContents(BADGE_DUMMY, contents));
  }, [contents]);

  return (
    <>
      <Wrapper>
        <Heading>
          핵심 목표를 정해주세요! <br />
          오타니 되기 까지 20%
        </Heading>
        <MandalartPart
          contents={{ mainContent, subContents: contents }}
          theme='primary'
          onTileClick={removeContentIndex}
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
