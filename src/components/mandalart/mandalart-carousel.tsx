import styled from 'styled-components';
import useMount from '@/hooks/use-mount';
import useEmblaCarousel from 'embla-carousel-react';
import { Flex } from '@/components/flex';
import { MandalartPart } from '@/components/mandalart/mandalart-part';
import { MANDALART_FULL_THEME } from '@/constants/mandalart-theme';
import { MandalartPartType, MandalartThemeType } from '@/types/mandalart';

interface MandalartCarouselProps {
  contents: MandalartPartType[];
  theme: MandalartThemeType;

  onClick?: (id: number) => void;
}

export function MandalartCarousel({ contents, theme, onClick }: MandalartCarouselProps) {
  const [emblaRef] = useEmblaCarousel();
  const isMounted = useMount();

  return (
    <Carousel isMounted={isMounted.current}>
      <CarouselViewport ref={emblaRef}>
        <CarouselContainer gap={10}>
          {contents.map((subContent, idx) => {
            return (
              <div key={'sub' + idx} onClick={() => onClick && onClick(idx)}>
                <MandalartPart
                  theme={MANDALART_FULL_THEME[theme].sub}
                  contents={subContent}
                  onTileClick={(tileIndex) => handleTileClick && handleTileClick(idx, tileIndex)}
                />
              </div>
            );
          })}
        </CarouselContainer>
      </CarouselViewport>
    </Carousel>
  );
}

const Carousel = styled.div<{ isMounted: boolean }>`
  opacity: ${({ isMounted }) => (isMounted ? 1 : 0)};
`;

const CarouselViewport = styled.div`
  user-select: none;
  overflow: hidden;
  /* width: 400px; */
`;

const CarouselContainer = styled(Flex)``;
