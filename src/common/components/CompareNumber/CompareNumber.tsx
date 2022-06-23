import { FC, Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface CompareNumberProps {
  leftNumber: number;
  rightNumber: number;
  errorNumbers: number;
  setErrorNumbers: Dispatch<SetStateAction<number>>;
  submit: boolean;
}

export const CompareNumber: FC<CompareNumberProps> = ({
  leftNumber,
  rightNumber,
  errorNumbers,
  setErrorNumbers,
  submit,
}) => {
  const [answer, setAnswer] = useState('');
  const [correct, setCorrect] = useState(true);
  useEffect(() => {
    if (leftNumber > rightNumber && answer === '>') {
      if (correct) return;
      setErrorNumbers(errorNumbers - 1);
      setCorrect(true);
      return;
    }
    if (leftNumber < rightNumber && answer === '<') {
      if (correct) return;
      setErrorNumbers(errorNumbers - 1);
      setCorrect(true);
      return;
    }
    if (leftNumber === rightNumber && answer === '=') {
      if (correct) return;
      setErrorNumbers(errorNumbers - 1);
      setCorrect(true);
      return;
    }
    if (!correct || errorNumbers === 16) return setCorrect(false);
    setCorrect(false);
    setErrorNumbers(errorNumbers + 1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer, leftNumber, rightNumber, submit]);

  return (
    <div className="compare-number-box">
      {leftNumber}
      <input
        style={{
          width: '100px',
          border: 'none',
          borderBottom: submit && !correct ? '1px solid red' : '1px solid black',
          textAlign: 'center',
          fontSize: '18px',
          color: submit && !correct ? 'red' : undefined,
        }}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      {rightNumber}
    </div>
  );
};

export default CompareNumber;
