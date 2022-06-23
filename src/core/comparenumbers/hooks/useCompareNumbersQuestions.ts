import { useState, Dispatch, SetStateAction, useMemo } from 'react';

export interface compareNumber {
  index: number;
  leftNumber: number;
  rightNumber: number;
}

export interface UseCompareNumbersQuestionsProps {
  errorNumbers: number;
  compareNumbers: compareNumber[];
  setErrorNumbers: Dispatch<SetStateAction<number>>;
}

export const useCompareNumbersQuestions = (): UseCompareNumbersQuestionsProps => {
  const [errorNumbers, setErrorNumbers] = useState(16);
  const compareNumbers = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => {
      return {
        index: i + 1,
        leftNumber: Math.floor(Math.random() * 100),
        rightNumber: Math.floor(Math.random() * 100),
      };
    });
  }, []);
  return {
    errorNumbers,
    compareNumbers,
    setErrorNumbers,
  };
};
