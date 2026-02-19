import { createContext, useContext } from 'react';

interface SelectContextType {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: (v: string) => void;
}

export const SelectContext = createContext<SelectContextType | null>(null);

export const useSelect = () => {
  const ctx = useContext(SelectContext);
  return { ...ctx };
};
