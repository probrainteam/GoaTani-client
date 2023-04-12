import React from 'react';
import styled from 'styled-components';

function Footer() {
  return <Wrapper>team probrain</Wrapper>;
}

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary[100]};
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 18px;

  color: ${({ theme }) => theme.colors.white};
`;

export default Footer;
