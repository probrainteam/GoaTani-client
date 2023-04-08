import { MandalartItemType } from '@/types/mandalart';
import styled from 'styled-components';

export const MANDALART_ITEM_SIZE = '90px';

interface MandalartItemProps extends MandalartItemType {
  color: string;
  bg: string;
  onClick?: (id: string) => void;
}

export function MandalartItem({ content, id, bg, color, onClick }: MandalartItemProps) {
  return (
    <Wrapper bg={bg} color={color} onClick={() => onClick && onClick(id)}>
      {content}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ bg: string; color: string }>`
  width: ${MANDALART_ITEM_SIZE};
  height: ${MANDALART_ITEM_SIZE};

  border-radius: 5px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
`;

export default MandalartItem;
