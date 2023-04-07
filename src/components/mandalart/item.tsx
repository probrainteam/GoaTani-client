import { MandalartItemType } from '@/types/mandalart';
import styled from 'styled-components';

export const MANDALART_ITEM_SIZE = '90px';

export function MandalartItem({ content, id }: MandalartItemType) {
  return <Wrapper>{content}</Wrapper>;
}

const Wrapper = styled.div`
  width: ${MANDALART_ITEM_SIZE};
  height: ${MANDALART_ITEM_SIZE};

  border-radius: 5px;

  display: flex;
  align-items: center;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.lighten[100]};
  color: ${({ theme }) => theme.colors.darken[100]};
`;

export default MandalartItem;
