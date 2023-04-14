'use client';

import Heading from '@/app/create/heading';
import { MandalartCarousel } from '@/components/mandalart';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';

const DUMMY_KEY_GOALS = [
  {
    id: 'subNaN',
    content: '몸 만들기',
  },
  {
    id: 'subsubNaN1',
    content: '돈 벌기',
  },
  {
    id: 'subsubsubNaN11',
    content: '취업',
  },
  {
    id: 'subsubsubsubNaN111',
    content: '취미',
  },
  {
    id: 'subsubsubsubsubNaN1111',
    content: '여행',
  },
  {
    id: 'subsubsubsubsubsubNaN11111',
    content: '책 읽기',
  },
  {
    id: 'subsubsubsubsubsubsubNaN111111',
    content: 'sadsadsad',
  },
  {
    id: 'subsubsubsubsubsubsubsubNaN1111111',
    content: 'sadasdsadsad',
  },
];

export default function DetailedGoalsPage() {
  const completeCount = 0;
  const router = useRouter();

  const handleCarouselClick = (id: number) => {
    router.push(`/create/detailed-goals/${id}`);
  };

  const [contents, setContents] = useState(
    DUMMY_KEY_GOALS.map((mainContent) => ({
      mainContent,
      subContents: [],
    })),
  );

  return (
    <Wrapper>
      <Heading>
        세부 목표를 정해주세요! <br />
        오타니 되기 까지 {60 + completeCount * 5}%
      </Heading>

      <MandalartCarousel contents={contents} theme='primary' onClick={handleCarouselClick} />
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
