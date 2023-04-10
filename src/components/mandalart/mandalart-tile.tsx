import { MANDALART_SIZE, MANDALART_TEXT_SIZE, MANDALART_TILE_THEME } from '@/constants/mandalart-theme';
import { MandalartSizeType, MandalartTileTheme, MandalartTileType } from '@/types/mandalart';
import styled from 'styled-components';

interface MandalartTileProps extends MandalartTileType {
  theme: MandalartTileTheme;
  onClick?: (id: string) => void;

  order: number;
  size?: MandalartSizeType;
}

export function MandalartTile({ content, id, theme, onClick, order, size = 'md' }: MandalartTileProps) {
  const handleClick = () => {
    onClick && onClick(id);
  };
  return (
    <Wrapper
      bg={MANDALART_TILE_THEME[theme].bg}
      color={MANDALART_TILE_THEME[theme].text}
      size={size}
      order={order}
      onClick={handleClick}
    >
      {content}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ bg: string; color: string; order: number; size: MandalartSizeType }>`
  width: ${({ size }) => MANDALART_SIZE[size]}px;
  height: ${({ size }) => MANDALART_SIZE[size]}px;
  font-size: ${({ size }) => MANDALART_TEXT_SIZE[size]}px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  order: ${({ order }) => order};
`;
