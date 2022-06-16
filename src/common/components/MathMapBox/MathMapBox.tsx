import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { ImArrowRight } from 'react-icons/im';

export interface MathMapBoxProps {
  number: string;
  arrow?: boolean;
  missingNumbers: string[];
  errorNumbers: number;
  submit?: boolean;
  setErrorNumbers: Dispatch<SetStateAction<number>>;
}

export const MathMapBox: FC<MathMapBoxProps> = ({
  number,
  arrow = true,
  missingNumbers,
  submit = false,
  errorNumbers,
  setErrorNumbers,
}) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    if (value === number) return setErrorNumbers(errorNumbers - 1);
    return;
  });
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {missingNumbers.includes(number) ? (
        <input
          className="math-map-box input"
          style={{ border: number !== value && submit ? '2px solid red' : undefined }}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      ) : (
        <div className="math-map-box">{number}</div>
      )}

      {arrow && <ImArrowRight size={20} />}
    </div>
  );
};

export default MathMapBox;
