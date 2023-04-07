import MandalartItem, { MANDALART_ITEM_SIZE } from '@/components/mandalart/item';
import { MANDALART_THEME } from '@/constants/mandalart-theme';
import { MandalartThemeType, MandalartType } from '@/types/mandalart';
import { Fragment } from 'react';
import styled from 'styled-components';

interface MandalartProps extends MandalartType {
  theme: MandalartThemeType;
}
function Mandalart({ mainContent, subContents, theme }: MandalartProps) {
  const handleManageMandalartClick = (id: number) => {
    console.log('handleManageMandalartClick: ', id);
  };

  return (
    <Wrapper bg={MANDALART_THEME[theme].bg}>
      {subContents.map((subContent, idx) => {
        if (idx === 4) {
          return (
            <Fragment key={mainContent.id}>
              <MandalartItem
                bg={MANDALART_THEME[theme].mainBgColor}
                color={MANDALART_THEME[theme].mainTextColor}
                id={mainContent.id}
                content={mainContent.content}
              />
              <MandalartItem
                onClick={handleManageMandalartClick}
                bg={MANDALART_THEME[theme].subBgColor}
                color={MANDALART_THEME[theme].subTextColor}
                key={subContent.id}
                id={subContent.id}
                content={subContent.content}
              />
            </Fragment>
          );
        }
        return (
          <MandalartItem
            onClick={handleManageMandalartClick}
            key={subContent.id}
            bg={MANDALART_THEME[theme].subBgColor}
            color={MANDALART_THEME[theme].subTextColor}
            id={subContent.id}
            content={subContent.content}
          />
        );
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
