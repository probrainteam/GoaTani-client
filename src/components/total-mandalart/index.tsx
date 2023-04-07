import { DUMMY_MANDALART_TOTAL } from '@/constants/mandalart';
import { MandalartTotalType } from '@/types/mandalart';
import Mandalart from '@/components/mandalart';
import { Fragment } from 'react';
import styled from 'styled-components';

interface TotalMandalartProps {
  contents?: MandalartTotalType;
  theme: 'primary' | 'secondary';
}

function TotalMandalart({ contents = DUMMY_MANDALART_TOTAL, theme = 'primary' }: TotalMandalartProps) {
  const { mainContent, subContents } = contents;
  return (
    <Wrapper>
      {subContents.map((subContent, idx) => {
        if (idx === 4) {
          return (
            <Fragment key='result-objective'>
              {/* 어떻게 더 잘잘 할 방법이 있을까요? */}
              <Mandalart theme={theme} mainContent={mainContent.mainContent} subContents={mainContent.subContents} />
              <Mandalart
                // TODO : 수정
                theme={theme}
                mainContent={subContent.mainContent}
                subContents={subContent.subContents}
                key={'key-mandalart' + idx}
              />
            </Fragment>
          );
        }
        return (
          <Mandalart
            key={'key-mandalart' + idx}
            theme={theme}
            mainContent={subContent.mainContent}
            subContents={subContent.subContents}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr; */
`;

export default TotalMandalart;
