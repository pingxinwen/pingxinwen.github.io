import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

export default function Home () {
  return (
    <Fragment>
      <h1>你好，我是平信文！</h1>
      <p>这个网站还在编辑中。</p>
      <p>如果有兴趣，可以访问<a href="https://github.com/pingxinwen/homepage">Github仓库</a>了解更多。</p>
      <p>
        已支持的功能：
        <br/>
        - <Link to="article">博客列表</Link>
        <br/>
        - 代码支持语法高亮
      </p>
      <p>
        进行中的：
        <br/>
        - 关于我
        <br/>
        - <Link to="/">首页</Link>
      </p>
    </Fragment>
      
  )
}