import { FC, useState } from 'react';
import { ImArrowRight } from 'react-icons/im';

export interface MathMapBoxProps {
  number: string;
  arrow?: boolean;
  missingNumbers: string[];
  submit?: boolean;
}

export const MathMapBox: FC<MathMapBoxProps> = ({
  number,
  arrow = true,
  missingNumbers,
  submit = false,
}) => {
  const [value, setValue] = useState('');
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {missingNumbers.includes(number) ? (
        <input
          className="math-map-box input"
          style={{ border: number !== value && submit ? '1px solid red' : undefined }}
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
