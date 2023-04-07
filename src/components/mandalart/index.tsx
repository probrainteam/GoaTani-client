import MandalartItem, { MANDALART_ITEM_SIZE } from '@/components/mandalart/item';
import theme from '@/styles/theme';
import { MandalartType } from '@/types/mandalart';
import styled from 'styled-components';

function Mandalart({ mainContent, subContents }: MandalartType) {
  return (
    <Wrapper bg={theme.colors.primary[100]}>
      {subContents.map((subContent, idx) => {
        if (idx > 3) return null;
        return <MandalartItem key={subContent.id} id={subContent.id} content={subContent.content} />;
      })}
      <MandalartItem key={mainContent.id} id={mainContent.id} content={mainContent.content} />
      {subContents.map((subContent, idx) => {
        if (idx <= 3) return null;
        return <MandalartItem key={subContent.id} id={subContent.id} content={subContent.content} />;
      })}
    </Wrapper>
  );
}

const MANDALART_GAP = '5px';

const Wrapper = styled.div<{ bg: string }>`
  display: grid;
  grid-template-columns: ${`${MANDALART_ITEM_SIZE} ${MANDALART_ITEM_SIZE} ${MANDALART_ITEM_SIZE}`};
  grid-template-rows: 1fr 1fr 1fr;
  gap: ${MANDALART_GAP};

  border-radius: 10px;
  width: fit-content;
  padding: ${MANDALART_GAP};

  background-color: ${({ bg }) => bg};
`;

export default Mandalart;
