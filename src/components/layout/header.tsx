import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <Image src='/assets/images/GOATANI_logo.svg' width={91} height={31} alt='GOATANI' />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary[100]};
  height: 59px;
  display: flex;
  align-items: center;
  padding: 0px 18px;
`;

export default Header;
