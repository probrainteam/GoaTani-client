'use client';

import { MandalartCarousel } from '@/components/mandalart';
import useDidMount from '@/hooks/use-did-mount';
import { MandalartPartType } from '@/types/mandalart';
import { BranchesType, CreateStorageType, getCreateStorage } from '@/utils/storage';
import { useState } from 'react';

function CreateCompletePage() {
  const [contents, setContents] = useState<MandalartPartType[]>([]);

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
      <MandalartCarousel contents={contents} theme='primary' isFullMandalart />
    </div>
  );
}

export default CreateCompletePage;
