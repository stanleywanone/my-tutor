import { PageComponent } from '@/common/types/page';
import { MathMap } from '@/core/mathmap/components/MathMap';

export const mathMap: PageComponent = () => {
  return (
    <div className="math-map-container">
      This is the explanation about math map
      <MathMap />
    </div>
  );
};

export default mathMap;
