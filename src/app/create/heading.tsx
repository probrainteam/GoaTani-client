import React from 'react';
import styled from 'styled-components';

function Heading({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.h1`
  font-family: 'Noto Sans';
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-align: center;

  margin: 50px auto;
`;

export default Heading;
