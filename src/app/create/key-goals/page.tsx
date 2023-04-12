'use client';

import Heading from '@/app/create/heading';
import Badge from '@/components/badge';
import Button from '@/components/button';
import { Input } from '@/components/input';
import { MandalartPart } from '@/components/mandalart';
import { MandalartTileType } from '@/types/mandalart';
import { getFilterRecommendedSubContents } from '@/utils/mandalart';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';

const DUMMY_DATA = {
  mainContent: {
    id: '0',
    content: 'Key Goals',
  },
};

const BADGE_DUMMY = ['몸 만들기', '돈 벌기', '취업', '취미', '여행', '책 읽기', '취미', '여행', '책 읽기'];

export default function KeyGoalsPage() {
  const router = useRouter();

  const [subContents, setSubContents] = useState<MandalartTileType[]>([]);
  const [input, setInput] = useState('');
  const [recommendedContents, setRecommendedContents] = useState(BADGE_DUMMY);

  const buttonDisabled = subContents.length !== 8;

  const handleAddSubContent = () => {
    if (input === '') return;

    const newSubContent = {
      id: 'sub' + (subContents[subContents.length - 1]?.id + 1 ?? 'sub1'),
      content: input,
    };

    setSubContents([...subContents, newSubContent]);
    setInput('');
  };

  const handleBadgeClick = (content: string) => {
    const newSubContent = {
      id: 'sub' + (subContents[subContents.length - 1]?.id + 1 ?? 'sub1'),
      content,
    };

    const newSubContents = [...subContents, newSubContent];
    setSubContents(newSubContents);
    setInput('');

    setRecommendedContents(getFilterRecommendedSubContents(BADGE_DUMMY, newSubContents));
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
    <>
      <Wrapper>
        <Heading>
          핵심 목표를 정해주세요! <br />
          오타니 되기 까지 20%
        </Heading>
        <MandalartPart
          contents={{ mainContent: DUMMY_DATA.mainContent, subContents }}
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
        <Button disabled={buttonDisabled} onClick={() => router.push('/create/detailed-goals')}>
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
