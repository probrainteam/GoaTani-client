import { MandalartPart } from '@/components/mandalart/mandalart-part';
import { MandalartPartType, MandalartThemeType } from '@/types/mandalart';
import { Fragment } from 'react';
import styled from 'styled-components';

interface MandalartFullProps {
  mainContent: MandalartPartType;
  subContents: MandalartPartType[];
  theme: MandalartThemeType;
}

function MandalartFull({ mainContent, subContents, theme }: MandalartFullProps) {
  return (
    <Wrapper>
      {subContents.map((subContent, idx) => {
        if (idx === 4) {
          return (
            <Fragment key={idx}>
              <MandalartPart
                theme={theme}
                mainContent={mainContent.mainContent}
                subContents={mainContent.subContents}
              />
              <MandalartPart theme={theme} mainContent={subContent.mainContent} subContents={subContent.subContents} />
            </Fragment>
          );
        }
        return (
          <MandalartPart
            theme={theme}
            key={'sub' + idx}
            mainContent={subContent.mainContent}
            subContents={subContent.subContents}
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

  border-radius: 10px;
  width: fit-content;
`;
