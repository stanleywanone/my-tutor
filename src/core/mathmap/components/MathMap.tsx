import { memo } from 'react';
import { MathMapBox } from '@/common/components/MathMapBox';

import { useMathMap } from '@/core/mathmap/hooks/useMathMap';

export const MathMap = memo<any>(() => {
  const { mathMapNumbers } = useMathMap();

  return (
    <>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(0, 10).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox number={num} arrow={i === 9 ? false : true} />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(10, 20).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox number={num} arrow={i === 9 ? false : true} />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(20, 30).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox number={num} arrow={i === 9 ? false : true} />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(30, 40).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox number={num} arrow={i === 9 ? false : true} />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(40, 50).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox number={num} arrow={i === 9 ? false : true} />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(50, 60).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox number={num} arrow={i === 9 ? false : true} />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(60, 70).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox number={num} arrow={i === 9 ? false : true} />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(70, 80).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox number={num} arrow={i === 9 ? false : true} />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(80, 90).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox number={num} arrow={i === 9 ? false : true} />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: '15px' }}>
        {mathMapNumbers.slice(90).map((num, i) => {
          return (
            <div key={num} style={{ display: 'flex' }}>
              <MathMapBox number={num} arrow={i === 9 ? false : true} />
            </div>
          );
        })}
      </div>
    </>
  );
});

MathMap.displayName = 'MathMap';
