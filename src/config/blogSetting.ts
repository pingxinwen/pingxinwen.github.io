// import mdx file here

import Hello from '#/hello.mdx';
import UseWebpack1 from '#/use-webpack-1.mdx';
import SummaryTransport from '#/summary-computer-network-transport.mdx';

type MDXComponent = (props: any) => JSX.Element;


/**
 * 包含单个mdx文件及其信息
 */
export interface BlogSet {
  /**
   * mdx component
   */
  componet: MDXComponent,
  /**
   * mdx文件名，用于路由id
   */
  name: string,
  /**
   * 博客文本标题
   */
  title: string,
  /**
   * 博客标签
   * for English text, make sure to use UpperCase
   */
  tags: Array<string>
}

export const blogFiles: Array<BlogSet> = [
  {
    componet: Hello,
    name: 'hello',
    title: '测试文本',
    tags: []
  },
  {
    componet: UseWebpack1,
    name: 'how-to-use-webpack-1',
    title: 'Webpack学习总结1 - 如何使用webpack打包/启动devServe',
    tags: ['Webpack', 'Project']
  },
  {
    componet: SummaryTransport,
    name: 'summary-computer-network-transport',
    title: '计算机网络知识总结(1) - 传输层',
    tags: ['C', '计算机网络']
  }
];


export const tagColors: Map<string, string> = new Map([
  [
    'Webpack', '#175d96'
  ],
  [
    'Vue', '#4abf8a'
  ],
  [
    'Project', '#78909c'
  ],
  [
    'C','#ffd600'
  ],
  [
    '计算机网络','#03a9f4'
  ]
])


