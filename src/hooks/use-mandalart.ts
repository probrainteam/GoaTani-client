import { useState } from 'react';

interface UseMandalartReturn {
  addSubContent: (content: string) => string[] | null;
  removeContentIndex: (idx: number) => string[];

  isAllInput: boolean;
  contents: string[];
}

function useMandalart(initContents?: string[]): UseMandalartReturn {
  const [contents, setSubContents] = useState<string[]>(initContents ?? []);

  const isAllInput = contents.length === 8;

  const addSubContent = (content: string): string[] | null => {
    if (isAllInput) {
      return null;
    }
    const newSubContents = [...contents, content];

    setSubContents(newSubContents);
    return newSubContents;
  };

  const removeContentIndex = (idx: number): string[] => {
    const newSubContents = contents.filter((_, i) => i !== idx);
    setSubContents(newSubContents);

    return newSubContents;
  };

  return {
    addSubContent,
    removeContentIndex,
    isAllInput,
    contents,
  };
}

export default useMandalart;
