import { FC } from 'react';
import { useClickTop } from '../hooks/useClickTop';
import { ToTop } from '@icon-park/react';

export const ClickTop: FC = () => {
  const { handleClick, show } = useClickTop();

  return (
    <div 
      className={show ? 'click-top show' : 'click-top'}
      onClick={handleClick}
    >
      <ToTop theme="outline" size="24" fill="#666" />
    </div>
  );
};