import './style/blogHome.less';

import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableColumnsType, Tag } from 'antd';
import { blogFiles, tagColors, BlogSet } from '../config/blogSetting';

const columns: TableColumnsType<BlogSet> = [
  {
    title: '题目',
    dataIndex: 'title',
    align: 'left',
    render: (_, data) => <Link to={`/blog/${data.name}`}>{data.title}</Link>,
    width: '70%'
  },
  {
    title: '标签',
    dataIndex: 'tags',
    align: 'center',
    render: (tags: string[]) =>
      tags.sort().map(value =>
        <Tag key={value} color={tagColors.get(value)}>
          {value}
        </Tag>
      )
  }
]

export default function BlogHome() {

  return (
    <>
      <h3>
        目前正在把之前写的博客搬运到这里，在我的
        <a href="https://www.cnblogs.com/pingxinwen/" style={{color:'#0066E0'}}>cnblog博客</a>
        上查看更多。
      </h3>
      <div className="blog-table">
        <Table
          dataSource={blogFiles}
          columns={columns}
          rowKey={(record) => record.name}
          rowClassName="blog-table-row"
          scroll={{
            scrollToFirstRowOnChange: true,
          }}
          size="large"
          bordered
        />
      </div>

    </>

  )
}