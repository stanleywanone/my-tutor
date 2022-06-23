import { PageComponent } from '@/common/types/page';
import { CompareNumbersQuestions } from '@/core/comparenumbers/components/CompareNumbersQuestions';

export const CompareNumbers: PageComponent = () => {
  return (
    <div className="compare-numbers-container">
      <p>Write the correct symbol &#40; &#60; , &#62; or = &#41; for each item</p>
      <CompareNumbersQuestions />
    </div>
  );
};

export default CompareNumbers;
