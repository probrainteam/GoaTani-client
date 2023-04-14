const CREATE_STORAGE_KEY = 'goatani';

type CreateKeyType = 'key-goal' | 'full-goal' | 'detailed-goals';

const INIT_CREATE_STORAGE = {
  'full-goal': '',
  'key-goal': [],
  'detailed-goals': [],
};

export const setCreateStorage = (key: CreateKeyType, value: any) => {
  const item = window.sessionStorage.getItem(CREATE_STORAGE_KEY);

  const obj = item ? JSON.parse(item) : INIT_CREATE_STORAGE;

  if (key === 'full-goal') {
    obj[key] = value;
  }

  window.sessionStorage.setItem(CREATE_STORAGE_KEY, JSON.stringify(obj));
};

export const getCreateStorage = (key: string) => {
  return key;
};
