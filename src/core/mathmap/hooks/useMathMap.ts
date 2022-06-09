import { useMemo } from 'react';

export interface useMathMapReturn {
  mathMapNumbers: string[];
}

export const useMathMap = (): useMathMapReturn => {
  const mathMapNumbers = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => {
      return i.toString();
    });
  }, []);

  return {
    mathMapNumbers,
  };
};
