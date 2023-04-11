'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useStyledComponentsRegistry } from './styled-components';
import styled, { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] = useStyledComponentsRegistry();

  useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>);

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <InnerWrapper>
            <Header />
            <MainWrapper>{children}</MainWrapper>
          </InnerWrapper>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

const Wrapper = styled.div`
  max-width: 475px;
  margin: auto;
  border: 1px solid black;
  height: 100%;
  overflow-x: hidden;
`;

const InnerWrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

const MainWrapper = styled.main`
  padding: 0 20px;
`;
