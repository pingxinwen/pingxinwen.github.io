import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExpandLeft, ExpandRight } from '@icon-park/react';

export function MyHeader(): JSX.Element {
  const [expand, setExpand] = useState(false);
  const [show, setShow] = useState(true);
  const headerRef = useRef<HTMLHeadElement>();
  const location = useLocation();

  useEffect(() => {
    function changeExpand() {
      if (document.body.offsetWidth > 720) {
        setExpand(false);
      } else {
        setExpand(true);
        setShow(false);
      }
    };
    changeExpand();
    window.addEventListener('resize', changeExpand);
    return () => {
      window.removeEventListener('resize', changeExpand);
    }
  }, []);

  useEffect(() => {
    expand && setShow(false);
  }, [location])

  const onControllerClick = useCallback((e: React.MouseEvent) => {
    if (expand) {
      setShow(!show);
      e.stopPropagation();
    }
  }, [expand, show]);

  const onMaskClick = useCallback((e: React.MouseEvent) => {
    if (expand && e.target === headerRef.current) {
      setShow(false);
    }
  }, [expand]);

  console.log(show)

  const headerCln = `header${expand && !show ? ' header-collapse' : ''}`

  return (
    <header className={headerCln} onClick={onMaskClick} ref={headerRef}>
      <div className="header-wrapper">
        <div className="header-control" onClick={onControllerClick}>
          {
            show ?
              <ExpandRight theme="outline" size="24" strokeWidth={2} /> :
              <ExpandLeft theme="outline" size="24" strokeWidth={2} />
          }
        </div>
        <div className="header-title">
          <a href="http://blog.pingxinwen.top">平信文的小站</a>
        </div>
        <div className="header-menu">
          <Link to="/">首页</Link>
          <Link to="/article">博客</Link>
          <a>关于</a>
        </div>
      </div>
    </header>
  )
}