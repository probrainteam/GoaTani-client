import { MANDALART_ITEM_SIZE, MandalartTile } from '@/components/mandalart/mandalart-tile';
import { MANDALART_THEME } from '@/constants/mandalart-theme';
import { MandalartThemeType, MandalartPartType } from '@/types/mandalart';
import { getFilledSubContents } from '@/utils/mandalart';
import { Fragment } from 'react';
import styled from 'styled-components';

interface MandalartPartProps extends MandalartPartType {
  theme: MandalartThemeType;
  handleItemDelete?: (id: string) => void;
}

export function MandalartPart({ mainContent, subContents, theme, handleItemDelete }: MandalartPartProps) {
  const fillSubContents = getFilledSubContents(subContents);

  return (
    <Wrapper bg={MANDALART_THEME[theme].bg}>
      {fillSubContents.map((subContent, idx) => {
        if (idx === 4) {
          return (
            <Fragment key={mainContent.id}>
              {/* 어떻게 더 잘잘 할 방법이 있을까요? */}
              <MandalartTile
                bg={MANDALART_THEME[theme].mainBgColor}
                color={MANDALART_THEME[theme].mainTextColor}
                id={mainContent.id}
                content={mainContent.content}
              />
              <MandalartTile
                bg={MANDALART_THEME[theme].subBgColor}
                color={MANDALART_THEME[theme].subTextColor}
                key={subContent.id}
                id={subContent.id}
                content={subContent.content}
                onClick={handleItemDelete}
              />
            </Fragment>
          );
        }
        return (
          <MandalartTile
            key={subContent.id}
            bg={MANDALART_THEME[theme].subBgColor}
            color={MANDALART_THEME[theme].subTextColor}
            id={subContent.id}
            content={subContent.content}
            onClick={handleItemDelete}
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
