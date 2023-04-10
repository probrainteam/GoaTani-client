import { MandalartPart } from '@/components/mandalart/mandalart-part';
import { MANDALART_FULL_THEME } from '@/constants/mandalart-theme';
import { MandalartFullType, MandalartThemeType } from '@/types/mandalart';
import styled from 'styled-components';

interface MandalartFullProps {
  theme: MandalartThemeType;
  contents: MandalartFullType;
}

function MandalartFull({ contents, theme }: MandalartFullProps) {
  const { mainContent, subContents } = contents;

  return (
    <Wrapper>
      <MandalartPart order={4} theme={MANDALART_FULL_THEME[theme].main} contents={mainContent} size='sm' />
      {subContents.map((subContent, idx) => {
        return (
          <MandalartPart
            order={idx}
            size='sm'
            theme={MANDALART_FULL_THEME[theme].sub}
            key={'sub' + idx}
            contents={subContent}
          />
        );
      })}
    </Wrapper>
  );
}

export default MandalartFull;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 5px;
  border-radius: 10px;
  width: fit-content;

  margin: auto;
`;
