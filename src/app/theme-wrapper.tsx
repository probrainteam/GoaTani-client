'use client';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import styled from 'styled-components';

import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <InnerWrapper>
          <Header />
          <MainWrapper>{children}</MainWrapper>
        </InnerWrapper>
        <Footer />
      </Wrapper>
    </ThemeProvider>
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
  height: calc(100vh - 59px);
`;
