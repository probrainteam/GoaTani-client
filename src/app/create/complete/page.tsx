'use client';

import Button from '@/components/button';
import { MandalartCarousel } from '@/components/mandalart';
import useDidMount from '@/hooks/use-did-mount';
import { MandalartPartType } from '@/types/mandalart';
import { BranchesType, CreateStorageType, getCreateStorage } from '@/utils/storage';
import { useState } from 'react';
import styled from 'styled-components';

function CreateCompletePage() {
  const [contents, setContents] = useState<MandalartPartType[]>([]);

  const fullGoal = contents.length > 0 && contents[0].mainContent;

  const initSetting = () => {
    const data = getCreateStorage() as CreateStorageType;

    if (data) {
      const mainContent = {
        mainContent: data['full-goal'],
        subContents: data.branches.map(({ title }: BranchesType) => title),
      };
      const subContents = data.branches.map(({ title, details }: BranchesType) => ({
        mainContent: title,
        subContents: details,
      }));
      setContents([mainContent, ...subContents]);
    }
  };

  useDidMount(initSetting);

  return (
    <div>
      {/* TODO : 스켈레톤 추가 */}
      <Heading>{fullGoal}</Heading>
      <MandalartCarousel contents={contents} theme='primary' isFullMandalart />

      <ButtonWrapper>
        <Button>피드에 공유하기</Button>

        <Button variant='outline'>다운로드</Button>
      </ButtonWrapper>
    </div>
  );
}

const Heading = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  text-align: center;

  color: #000000;
  text-decoration: underline;
  text-underline-offset: 4px;

  margin-top: 37px;
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  gap: 6px;
`;

export default CreateCompletePage;
