'use client';

import { MandalartCarousel } from '@/components/mandalart/mandalart-carousel';
import styled from 'styled-components';

export default function DetailedGoalsPage() {
  return (
    <Wrapper>
      <MandalartCarousel />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  color: black;
`;
