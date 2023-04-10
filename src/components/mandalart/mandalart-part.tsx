import { MANDALART_ITEM_SIZE, MandalartTile } from '@/components/mandalart/mandalart-tile';
import { MANDALART_THEME } from '@/constants/mandalart-theme';
import { MandalartThemeType, MandalartPartType } from '@/types/mandalart';
import { getFilledSubContents } from '@/utils/mandalart';
import styled from 'styled-components';

interface MandalartPartProps {
  theme: MandalartThemeType;

  contents: MandalartPartType;
  handleItemDelete?: (id: string) => void;
}

export function MandalartPart({ contents, theme, handleItemDelete }: MandalartPartProps) {
  const { mainContent, subContents } = contents;

  const fillSubContents = getFilledSubContents(subContents);

  return (
    <Wrapper bg={MANDALART_THEME[theme].bg}>
      <MandalartTile
        bg={MANDALART_THEME[theme].mainBgColor}
        color={MANDALART_THEME[theme].mainTextColor}
        id={mainContent.id}
        content={mainContent.content}
        order={4}
      />

      {fillSubContents.map((subContent, idx) => {
        return (
          <MandalartTile
            key={subContent.id}
            bg={MANDALART_THEME[theme].subBgColor}
            color={MANDALART_THEME[theme].subTextColor}
            id={subContent.id}
            content={subContent.content}
            onClick={handleItemDelete}
            order={idx}
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
