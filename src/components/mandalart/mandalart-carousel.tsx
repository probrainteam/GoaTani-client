import styled from 'styled-components';
import useMount from '@/hooks/use-mount';
import useEmblaCarousel from 'embla-carousel-react';
import { Flex } from '@/components/flex';
import { MandalartPart } from '@/components/mandalart/mandalart-part';
import { MANDALART_FULL_THEME } from '@/constants/mandalart-theme';
import { MandalartFullType, MandalartThemeType } from '@/types/mandalart';

interface MandalartCarouselProps {
  contents: MandalartFullType;
  theme: MandalartThemeType;
}

export function MandalartCarousel({ contents, theme }: MandalartCarouselProps) {
  const [emblaRef] = useEmblaCarousel();
  const isMounted = useMount();

  const { mainContent, subContents } = contents;

  return (
    <Carousel isMounted={isMounted.current}>
      <CarouselViewport ref={emblaRef}>
        <CarouselContainer gap={10}>
          <MandalartPart theme={MANDALART_FULL_THEME[theme].main} contents={mainContent} />
          {subContents.map((subContent, idx) => {
            return <MandalartPart theme={MANDALART_FULL_THEME[theme].sub} key={'sub' + idx} contents={subContent} />;
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
