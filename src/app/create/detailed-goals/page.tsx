'use client';

import { MandalartCarousel } from '@/components/mandalart';
import { DUMMY_MANDALART_TOTAL } from '@/constants/mandalart';
import styled from 'styled-components';

export default function DetailedGoalsPage() {
  return (
    <Wrapper>
      <MandalartCarousel contents={DUMMY_MANDALART_TOTAL} theme='primary' />
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
