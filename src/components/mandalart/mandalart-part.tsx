import { MandalartTile } from '@/components/mandalart/mandalart-tile';
import { MANDALART_PART_THEME } from '@/constants/mandalart-theme';
import { MandalartThemeType, MandalartPartType, MandalartSizeType } from '@/types/mandalart';
import { getFilledSubContents } from '@/utils/mandalart';
import styled from 'styled-components';

interface MandalartPartProps {
  contents: MandalartPartType;
  handleItemDelete?: (idx: number) => void;

  theme: MandalartThemeType;
  size?: MandalartSizeType;
  order?: number;
  className?: string;
}

export function MandalartPart({ contents, theme, handleItemDelete, size, order = 0, className }: MandalartPartProps) {
  const { mainContent, subContents } = contents;

  const fillSubContents = getFilledSubContents(subContents);

  return (
    <Wrapper bg={MANDALART_PART_THEME[theme].bg} order={order} size={size} className={className}>
      <MandalartTile theme={MANDALART_PART_THEME[theme].main} content={mainContent} order={4} size={size} />

      {fillSubContents.map((subContent, idx) => {
        return (
          <MandalartTile
            key={idx}
            theme={MANDALART_PART_THEME[theme].sub}
            content={subContent}
            onClick={() => handleItemDelete && handleItemDelete(idx)}
            size={size}
            order={idx}
          />
        );
      })}
    </Wrapper>
  );
}

const MANDALART_GAP = '5px';

const Wrapper = styled.div<{ bg: string; order: number; size?: MandalartSizeType }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  grid-template-rows: 1fr 1fr 1fr;
  gap: ${MANDALART_GAP};

  width: fit-content;
  padding: ${MANDALART_GAP};

  background-color: ${({ bg }) => bg};
  order: ${({ order }) => order};

  ${({ size }) => {
    if (size === 'sm') {
      return `
      border-radius: 4px;
        `;
    }
    return `
      border-radius: 10px;
    `;
  }}
`;
