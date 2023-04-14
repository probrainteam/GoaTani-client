import { MandalartTileType } from '@/types/mandalart';

const CREATE_STORAGE_KEY = 'goatani';

type CreateKeyType = 'key-goal' | 'full-goal' | 'detailed-goals';

interface BranchesType {
  title: string;
  details: string[];
}

const INIT_CREATE_STORAGE = {
  'full-goal': '',
  'branches': [],
};

export const setCreateStorage = (key: CreateKeyType, value: string | any) => {
  const item = window.sessionStorage.getItem(CREATE_STORAGE_KEY);

  const obj = item ? JSON.parse(item) : INIT_CREATE_STORAGE;

  if (key === 'full-goal') {
    obj[key] = value;
  }

  if (key === 'key-goal') {
    const newKeyGoalObj = value.map((item: MandalartTileType) => ({
      title: item.content,
      details: [],
    }));
    obj['branches'] = newKeyGoalObj;
  }
  window.sessionStorage.setItem(CREATE_STORAGE_KEY, JSON.stringify(obj));
};

export const getCreateStorage = (key?: string) => {
  const item = window.sessionStorage.getItem(CREATE_STORAGE_KEY);
  const obj = item ? JSON.parse(item) : INIT_CREATE_STORAGE;
  if (!key) return obj;

  if (key === 'key-goal') {
    return obj['branches'].map((item: BranchesType) => item.title);
  }
  return obj[key];
};
