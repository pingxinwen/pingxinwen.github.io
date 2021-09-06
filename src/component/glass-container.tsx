import React from 'react';

interface GlassProps {
  children: React.ReactNode;
  className?: string;
}

function GlassContainer(props: GlassProps) {
  const appendClas = props.className ? ' ' + props.className : '';
  const cls = "container-glass" + appendClas;

  return (
    <main className={cls}>
      {props.children}
    </main>
  )
};

export default GlassContainer;