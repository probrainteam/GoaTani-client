'use client';

import Button from '@/components/button';
import { Flex } from '@/components/flex';
import { Input } from '@/components/input';
import { useState } from 'react';
import styled from 'styled-components';

function CreatePostingPage() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');

  const isAllInput = nickname !== '' && password !== '';

  return (
    <Wrapper>
      <Flex direction='column' gap={16}>
        <Heading>피드에 공유하기</Heading>
        <Flex gap={12}>
          <Input placeholder='*닉네임을 입력하세요' value={nickname} onChange={(e) => setNickname(e.target.value)} />
          <Input placeholder='*비밀번호를 입력하세요' value={password} onChange={(e) => setPassword(e.target.value)} />
        </Flex>
        <ContentInput placeholder='내용을 입력하세요' value={content} onChange={(e) => setContent(e.target.value)} />
        <Button disabled={!isAllInput}>공유하기</Button>
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 300px;
  margin: 50px auto;
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-align: center;

  color: #000000;
  width: 100%;
`;

const ContentInput = styled.textarea`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  position: relative;
  transition: all 0.1s ease-in-out;

  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.white};

  resize: none;

  padding: 10px 12px;
  font-size: 13px;
  :focus-within {
    border-color: ${({ theme }) => theme.colors.primary[300]};

    button {
      opacity: 1;
    }
  }
`;
export default CreatePostingPage;
