'use client';

import Heading from '@/app/create/heading';
import { MandalartCarousel } from '@/components/mandalart';
import { INIT_CONTENTS } from '@/constants/mandalart';
import { MandalartPartType } from '@/types/mandalart';
import { getCreateStorage } from '@/utils/storage';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function DetailedGoalsPage() {
  const completeCount = 0;
  const [contents, setContents] = useState<MandalartPartType[]>(INIT_CONTENTS);
  const [currentPart, setCurrentPart] = useState(0);

  const handleTileClick = (partIndex: number, tileIndex: number) => {
    if (partIndex !== currentPart) return;

    console.log('partIndex: ', partIndex, tileIndex);
  };

  const init_setting = () => {
    const keyGoals = getCreateStorage('key-goal');

    const newContents = keyGoals.map((content: string) => ({
      mainContent: content,
      subContents: [],
    }));

    setContents(newContents);
  };

  useEffect(() => {
    init_setting();
  }, []);

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
`;
