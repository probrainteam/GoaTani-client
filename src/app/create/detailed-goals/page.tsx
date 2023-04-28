'use client';

import TileInput from '@/app/create/detailed-goals/input';
import Heading from '@/app/create/heading';
import Button from '@/components/button';
import { MandalartCarousel } from '@/components/mandalart';
import { INIT_CONTENTS } from '@/constants/mandalart';
import useDidMount from '@/hooks/use-did-mount';
import { MandalartPartType } from '@/types/mandalart';
import { DETAILED_GOAL, getCreateStorage, setCreateStorage } from '@/utils/storage';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
const BADGE_DUMMY = ['몸 만들기', '돈 벌기', '취업', '취미', '여행', '책 읽기', '취미2', '여행2', '책 읽기2'];

export default function DetailedGoalsPage() {
  const router = useRouter();
  const completeCount = 0;
  const [contents, setContents] = useState<MandalartPartType[]>(INIT_CONTENTS);
  const [currentPart, setCurrentPart] = useState(0);

  const isCurrentPartPullSelect = contents[currentPart].subContents.length === 8;
  const currentPartContents = contents[currentPart].subContents;

  const isAllSelect = contents.every((content) => content.subContents.length === 8);

  const handleRemoveTileContent = (partIndex: number, tileIndex: number) => {
    const newContents = [...contents];
    newContents[currentPart].subContents.splice(tileIndex, 1);
    setContents(newContents);
  };

  const handleTileClick = (partIndex: number, tileIndex: number) => {
    if (partIndex !== currentPart) return;
    handleRemoveTileContent(partIndex, tileIndex);
  };

  const handleAddTileContent = (content: string) => {
    if (isCurrentPartPullSelect) return;

    const newContents = [...contents];
    newContents[currentPart].subContents.push(content);
    setContents(newContents);
  };

  const onNextClick = () => {
    setCreateStorage(DETAILED_GOAL, contents);
    router.push('/create/complete');
  };

  const init_setting = () => {
    const keyGoals = getCreateStorage('key-goal') as string[];

    const newContents = keyGoals.map((content: string) => ({
      mainContent: content,
      subContents: [],
    }));

    setContents(newContents);
  };

  useDidMount(() => {
    init_setting();
  });

  return (
    <Wrapper>
      <Heading>
        세부 목표를 정해주세요! <br />
        오타니 되기 까지 {60 + completeCount * 5}%
      </Heading>

      <MandalartCarousel
        contents={contents}
        theme='primary'
        handleTileClick={handleTileClick}
        handleCurrentPart={(partIndex) => setCurrentPart(partIndex)}
      />

      <TileInput
        initRecommendedContents={BADGE_DUMMY}
        addSubContent={handleAddTileContent}
        contents={currentPartContents}
        isInputDisabled={isCurrentPartPullSelect}
      />
      <ButtonWrapper>
        <Button disabled={!isAllSelect} onClick={onNextClick}>
          세부 목표 정하기
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  color: black;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;

  padding: 20px;
`;
