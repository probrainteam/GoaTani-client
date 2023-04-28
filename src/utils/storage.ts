import { MandalartPartType, MandalartTileType } from '@/types/mandalart';

const CREATE_STORAGE_KEY = 'goatani';

export const KEY_GOAL = 'key-goal';
export const FULL_GOAL = 'full-goal';
export const DETAILED_GOAL = 'detailed-goals';

type CreateKeyType = typeof KEY_GOAL | typeof FULL_GOAL | typeof DETAILED_GOAL;

export interface BranchesType {
  title: string;
  details: string[];
}

export interface CreateStorageType {
  'full-goal': string;
  'branches': BranchesType[];
}

const INIT_CREATE_STORAGE: CreateStorageType = {
  'full-goal': '',
  'branches': [],
};

export const setCreateStorage = (key: CreateKeyType, value: string | any) => {
  if (typeof window !== undefined) {
    const item = window.sessionStorage.getItem(CREATE_STORAGE_KEY);

    const obj = item ? JSON.parse(item) : INIT_CREATE_STORAGE;

    if (key === FULL_GOAL) {
      obj[key] = value;
    }

    if (key === KEY_GOAL) {
      const newKeyGoalObj = value.map((item: MandalartTileType) => ({
        title: item,
        details: [],
      }));
      obj['branches'] = newKeyGoalObj;
    }

    if (key === DETAILED_GOAL) {
      const newDetailedGoalObj = value.map((item: MandalartPartType, index: number) => ({
        title: item.mainContent,
        details: item.subContents,
      }));
      obj['branches'] = newDetailedGoalObj;
    }

    window.sessionStorage.setItem(CREATE_STORAGE_KEY, JSON.stringify(obj));
  }
};

export const getCreateStorage = (key?: string): CreateStorageType | string | string[] | null => {
  if (typeof window !== undefined) {
    const item = window.sessionStorage.getItem(CREATE_STORAGE_KEY);
    const obj = item ? JSON.parse(item) : INIT_CREATE_STORAGE;
    if (!key) return obj;

    if (key === FULL_GOAL) {
      return obj['full-goal'];
    }
    if (key === KEY_GOAL) {
      return obj['branches'].map((item: BranchesType) => item.title);
    }

    return obj[key];
  }

  return null;
};
