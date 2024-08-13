
export const setItem = (key: string, value: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
};
  
export const getItem = (key: string): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
};
  
export const removeItem = (key: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
};
  
export const clearStorage = (): void => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
};
  
export const getToken = (): string | null => {
    return getItem('token');
};
  
export const setToken = (token: string): void => {
    setItem('token', token);
};
  
export const removeToken = (): void => {
    removeItem('token');
};
  