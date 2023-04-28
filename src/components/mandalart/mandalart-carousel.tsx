import styled from 'styled-components';
import useMount from '@/hooks/use-mount';
import useEmblaCarousel from 'embla-carousel-react';
import { Flex } from '@/components/flex';
import { MandalartPart } from '@/components/mandalart/mandalart-part';
import { MANDALART_FULL_THEME } from '@/constants/mandalart-theme';
import { MandalartPartType, MandalartThemeType } from '@/types/mandalart';
import { useEffect } from 'react';

interface MandalartCarouselProps {
  contents: MandalartPartType[];
  theme: MandalartThemeType;

  isFullMandalart?: boolean;

  onClick?: (id: number) => void;
  handleTileClick?: (partIndex: number, tileIndex: number) => void;
  handleCurrentPart?: (partIndex: number) => void;
}

export function MandalartCarousel({
  contents,
  theme,
  onClick,
  handleTileClick,
  handleCurrentPart,
  isFullMandalart,
}: MandalartCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const isMounted = useMount();

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        const index = emblaApi.selectedScrollSnap();
        handleCurrentPart && handleCurrentPart(index);
      });
    }
  }, [emblaApi, handleCurrentPart]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, contents]);

  return (
    <Carousel isMounted={isMounted.current}>
      <CarouselViewport ref={emblaRef}>
        <CarouselContainer gap={10}>
          {contents.map((subContent, idx) => {
            const isMainPart = idx === 0 && isFullMandalart;
            return (
              <div key={'sub' + idx} onClick={() => onClick && onClick(idx)}>
                <MandalartPart
                  theme={isMainPart ? MANDALART_FULL_THEME[theme].main : MANDALART_FULL_THEME[theme].sub}
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
