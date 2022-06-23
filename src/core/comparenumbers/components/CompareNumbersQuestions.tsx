import { memo, useState } from 'react';
import { CompareNumber } from '@/common/components/CompareNumber';
import { useCompareNumbersQuestions } from '@/core/comparenumbers/hooks/useCompareNumbersQuestions';

export const CompareNumbersQuestions = memo<any>(() => {
  const [submit, setSubmit] = useState(false);
  const { errorNumbers, setErrorNumbers, compareNumbers } = useCompareNumbersQuestions();

  return (
    <div className="compare-numbers-questions">
      <div className="compare-numbers-example">
        <span style={{ fontStyle: 'italic' }}>Example: </span>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <div>13_____15</div>
          <div>
            13 <span style={{ color: 'red' }}> &#60;</span>15
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {' '}
        <CompareNumber
          leftNumber={compareNumbers[0].leftNumber}
          rightNumber={compareNumbers[0].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
        <CompareNumber
          leftNumber={compareNumbers[1].leftNumber}
          rightNumber={compareNumbers[1].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {' '}
        <CompareNumber
          leftNumber={compareNumbers[2].leftNumber}
          rightNumber={compareNumbers[2].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
        <CompareNumber
          leftNumber={compareNumbers[3].leftNumber}
          rightNumber={compareNumbers[3].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {' '}
        <CompareNumber
          leftNumber={compareNumbers[4].leftNumber}
          rightNumber={compareNumbers[4].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
        <CompareNumber
          leftNumber={compareNumbers[5].leftNumber}
          rightNumber={compareNumbers[5].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {' '}
        <CompareNumber
          leftNumber={compareNumbers[6].leftNumber}
          rightNumber={compareNumbers[6].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
        <CompareNumber
          leftNumber={compareNumbers[7].leftNumber}
          rightNumber={compareNumbers[7].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {' '}
        <CompareNumber
          leftNumber={compareNumbers[8].leftNumber}
          rightNumber={compareNumbers[8].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
        <CompareNumber
          leftNumber={compareNumbers[9].leftNumber}
          rightNumber={compareNumbers[9].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {' '}
        <CompareNumber
          leftNumber={compareNumbers[10].leftNumber}
          rightNumber={compareNumbers[10].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
        <CompareNumber
          leftNumber={compareNumbers[11].leftNumber}
          rightNumber={compareNumbers[11].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {' '}
        <CompareNumber
          leftNumber={compareNumbers[12].leftNumber}
          rightNumber={compareNumbers[12].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
        <CompareNumber
          leftNumber={compareNumbers[13].leftNumber}
          rightNumber={compareNumbers[13].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {' '}
        <CompareNumber
          leftNumber={compareNumbers[14].leftNumber}
          rightNumber={compareNumbers[14].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
        <CompareNumber
          leftNumber={compareNumbers[15].leftNumber}
          rightNumber={compareNumbers[15].rightNumber}
          setErrorNumbers={setErrorNumbers}
          errorNumbers={errorNumbers}
          submit={submit}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {errorNumbers > 0 && <button onClick={() => setSubmit(true)}>Submit</button>}
        {submit && errorNumbers > 0 && (
          <div style={{ marginLeft: '20px', color: 'red' }}>There are {errorNumbers} errors</div>
        )}
        {submit && errorNumbers === 0 && (
          <div style={{ marginLeft: '20px', color: 'green' }}>Excellent!</div>
        )}
      </div>
    </div>
  );
});

CompareNumbersQuestions.displayName = 'CompareNumbersQuestions';
