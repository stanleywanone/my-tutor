import { useMemo } from 'react';

export interface useMathMapReturn {
  mathMapNumbers: string[];
  missingNumbers: string[];
}

export const useMathMap = (): useMathMapReturn => {
  const mathMapNumbers = useMemo(() => {
    return Array.from({ length: 101 }).map((_, i) => {
      return i.toString();
    });
  }, []);

  const missingNumbers = useMemo(() => {
    return Array.from({ length: 25 }).map((_) => {
      return Math.floor(Math.random() * 100).toString();
    });
  }, []);

  return {
    mathMapNumbers,
    missingNumbers,
  };
};
