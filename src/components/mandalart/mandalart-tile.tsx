import { MANDALART_TILE_THEME } from '@/constants/mandalart-theme';
import { MandalartSizeType, MandalartTileTheme } from '@/types/mandalart';
import styled from 'styled-components';

interface MandalartTileProps {
  content: string;

  theme: MandalartTileTheme;
  onClick?: () => void;

  order: number;
  size?: MandalartSizeType;
}

export function MandalartTile({ content, theme, onClick, order, size = 'md' }: MandalartTileProps) {
  return (
    <Wrapper
      bg={MANDALART_TILE_THEME[theme].bg}
      color={MANDALART_TILE_THEME[theme].text}
      size={size}
      order={order}
      onClick={onClick}
    >
      {content}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ bg: string; color: string; order: number; size: MandalartSizeType }>`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 2px;

  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  order: ${({ order }) => order};

  ${({ size }) => {
    if (size === 'sm') {
      return `
        font-size : 10px;
        width : 43px;
        height : 43px;
        border-radius : 2px;
      `;
    }
    return `
      font-size : 16px;
      width : 90px;
      height : 90px;
      border-radius : 5px;
    `;
  }}
`;
