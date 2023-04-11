'use client';

import Heading from '@/app/create/heading';
import Button from '@/components/button';
import { Input } from '@/components/input';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const list = [
  '감자칩이되기',
  '감자칩이되기',
  '감자칩이되기',
  '전병 먹기',
  '전병 먹기',
  '전병 먹기',
  '전병민은 카톡을 읽어라',
  '전병은 왜 카톡을 안읽냐',
  '내 pr 확인해라',
];

function FullGoalsPage() {
  const router = useRouter();

  const [input, setInput] = useState('');

  const onClick = (content: string) => {
    setInput(content);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <Heading>
        오타니가 되어볼까요? <br />
        먼저 인생의 목표를 정해주세요!
      </Heading>

      <Input value={input} onChange={onInputChange} placeholder='목표를 입력해주세요' variant='outline' />

      <SubHeading>지금 HOT한 목표</SubHeading>
      <List>
        {list.map((content, idx) => (
          <ListItem onClick={() => onClick(content)} key={idx}>
            {content}
          </ListItem>
        ))}
      </List>
      <ButtonWrapper>
        <Button onClick={() => router.push('/create/key-goals')}>핵심 목표 정하기</Button>
      </ButtonWrapper>
    </div>
  );
}

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;

  padding: 20px;
`;

const SubHeading = styled.h2`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  color: ${({ theme: { colors } }) => colors.gray[800]};

  margin-top: 60px;
`;

const List = styled.ul`
  max-height: 300px;
  overflow-y: scroll;

  margin: 7px 0;
`;

const ListItem = styled.li`
  height: 37px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray[700]};

  ${({ theme: { typography } }) => typography.sm}
  line-height: 37px;
  padding: 0px 2px;

  &:last-child {
    border-bottom: none;
  }
`;

export default FullGoalsPage;
