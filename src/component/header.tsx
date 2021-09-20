import React from 'react';
import { Link } from 'react-router-dom';

export function MyHeader(): JSX.Element {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-title">平信文的小站</div>
        <div className="header-menu">
          <Link to="/">首页</Link>
          <Link to="/article">博客</Link>
          <a>关于</a>
        </div>
      </div>
    </header>
  )
}