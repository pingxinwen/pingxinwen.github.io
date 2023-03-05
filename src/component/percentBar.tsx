import { VFC } from 'react';
import { useScrollPercent } from '../hooks/useScrollPercent';

export const PercentBar: VFC = () => {
  const { scrollTop, scrollPercent } = useScrollPercent();
  return (
    <div className="percent">
      <div className='percent-bar' style={{ width: `${scrollPercent}%`, visibility: scrollTop > 64 ? 'visible' : 'hidden' }} />
    </div>
  );
};