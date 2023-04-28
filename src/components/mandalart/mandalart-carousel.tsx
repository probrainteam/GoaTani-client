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
  handleCurrentPart: (partIndex: number) => void;

  onClick?: (id: number) => void;
  handleTileClick?: (partIndex: number, tileIndex: number) => void;
}

export function MandalartCarousel({
  contents,
  theme,
  onClick,
  handleTileClick,
  handleCurrentPart,
}: MandalartCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const isMounted = useMount();

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        const index = emblaApi.selectedScrollSnap();
        handleCurrentPart(index);
      });
    }
  }, [emblaApi, handleCurrentPart]);

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
