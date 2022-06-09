import { FC } from 'react';
import { ImArrowRight } from 'react-icons/im';

export interface MathMapBoxProps {
  number: string;
  arrow?: boolean;
}

export const MathMapBox: FC<MathMapBoxProps> = ({ number, arrow = true }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="math-map-box">
        <div>{number}</div>
      </div>
      {arrow && <ImArrowRight size={20} />}
    </div>
  );
};

export default MathMapBox;
