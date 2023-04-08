import styled from 'styled-components';

interface FlexProps {
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  gap?: number;
  isFull?: boolean;
  padding?: number;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'start'};
  align-items: ${({ align }) => align || 'start'};
  gap: ${({ gap }) => `${gap}px` || 0};
  width: ${({ isFull }) => isFull && '100%'};
  padding: ${({ padding }) => `${padding}px` || 0};
`;
