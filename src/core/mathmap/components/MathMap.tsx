import { memo, useState } from 'react';
import { MathMapBox } from '@/common/components/MathMapBox';

import { useMathMap } from '@/core/mathmap/hooks/useMathMap';

export const MathMap = memo<any>(() => {
  const { mathMapNumbers, missingNumbers, errorNumbers, setErrorNumbers } = useMathMap();
  const [submit, setSubmit] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(1, 11).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox
                number={num}
                arrow={i === 9 ? false : true}
                missingNumbers={missingNumbers}
                submit={submit}
                errorNumbers={errorNumbers}
                setErrorNumbers={setErrorNumbers}
              />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(11, 21).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox
                number={num}
                arrow={i === 9 ? false : true}
                missingNumbers={missingNumbers}
                submit={submit}
                errorNumbers={errorNumbers}
                setErrorNumbers={setErrorNumbers}
              />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(21, 31).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox
                number={num}
                arrow={i === 9 ? false : true}
                missingNumbers={missingNumbers}
                submit={submit}
                errorNumbers={errorNumbers}
                setErrorNumbers={setErrorNumbers}
              />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(31, 41).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox
                number={num}
                arrow={i === 9 ? false : true}
                missingNumbers={missingNumbers}
                submit={submit}
                errorNumbers={errorNumbers}
                setErrorNumbers={setErrorNumbers}
              />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(41, 51).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox
                number={num}
                arrow={i === 9 ? false : true}
                missingNumbers={missingNumbers}
                submit={submit}
                errorNumbers={errorNumbers}
                setErrorNumbers={setErrorNumbers}
              />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(51, 61).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox
                number={num}
                arrow={i === 9 ? false : true}
                missingNumbers={missingNumbers}
                submit={submit}
                errorNumbers={errorNumbers}
                setErrorNumbers={setErrorNumbers}
              />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(61, 71).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox
                number={num}
                arrow={i === 9 ? false : true}
                missingNumbers={missingNumbers}
                submit={submit}
                errorNumbers={errorNumbers}
                setErrorNumbers={setErrorNumbers}
              />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(71, 81).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox
                number={num}
                arrow={i === 9 ? false : true}
                missingNumbers={missingNumbers}
                submit={submit}
                errorNumbers={errorNumbers}
                setErrorNumbers={setErrorNumbers}
              />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(81, 91).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox
                number={num}
                arrow={i === 9 ? false : true}
                missingNumbers={missingNumbers}
                submit={submit}
                errorNumbers={errorNumbers}
                setErrorNumbers={setErrorNumbers}
              />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(91).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox
                number={num}
                arrow={i === 9 ? false : true}
                missingNumbers={missingNumbers}
                submit={submit}
                errorNumbers={errorNumbers}
                setErrorNumbers={setErrorNumbers}
              />
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: '15px',
          alignItems: 'center',
        }}
      >
        <button className="math-map-box button-submit" onClick={() => setSubmit(true)}>
          Submit
        </button>
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

MathMap.displayName = 'MathMap';
