import './style/blogHome.less';

import React from 'react';
import { Link } from 'react-router-dom';
import List from '../component/list';
import { blogFiles, tagColors, BlogSet } from '../config/blogSetting';

export default function BlogHome() {

  return (
    <>
      <h3>
        目前正在把之前写的博客搬运到这里，在我的
        <a href="https://www.cnblogs.com/pingxinwen/" style={{ color: '#0066E0' }}>cnblog博客</a>
        上查看更多。
      </h3>
      <div className="blog-table">
        <List
          data={blogFiles}
          tagColor={tagColors}
        />
      </div>
    </>

  )
}