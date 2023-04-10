import { MandalartTileType } from '@/types/mandalart';
import styled from 'styled-components';

export const MANDALART_ITEM_SIZE = '90px';

interface MandalartTileProps extends MandalartTileType {
  color: string;
  bg: string;
  order: number;

  onClick?: (id: string) => void;
}

export function MandalartTile({ content, id, bg, color, onClick, order }: MandalartTileProps) {
  return (
    <Wrapper bg={bg} color={color} order={order} onClick={() => onClick && onClick(id)}>
      {content}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ bg: string; color: string; order: number }>`
  width: ${MANDALART_ITEM_SIZE};
  height: ${MANDALART_ITEM_SIZE};

  border-radius: 5px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  order: ${({ order }) => order};
`;
