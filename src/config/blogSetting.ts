import { lazy } from 'react';
type MDXComponent = (props: any) => JSX.Element | null;

/**
 * 包含单个mdx文件及其信息
 */
export interface BlogSet {
  /**
   * mdx component
   */
  component: MDXComponent,
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
    component: lazy(() => import('../../docs/hello/index.mdx')),
    name: 'hello',
    title: '测试文本',
    tags: []
  },
  {
    component: lazy(() => import('../../docs/use-webpack-1/index.mdx')),
    name: 'how-to-use-webpack-1',
    title: 'Webpack学习总结1 - 如何使用webpack打包/启动devServer',
    tags: ['Webpack', 'Project']
  },
  {
    component: lazy(() => import('../../docs/summary-computer-network-transport/index.mdx')),
    name: 'summary-computer-network-transport',
    title: '计算机网络知识总结(1) - 传输层',
    tags: ['C', '计算机网络']
  },
  {
    component: lazy(() => import('../../docs/use-hook-in-react/index.mdx')),
    name: 'use-hook-in-react',
    title: '在React中巧妙使用Hook',
    tags: ['React'],
  }
].reverse();


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
    'C', '#ffd600'
  ],
  [
    '计算机网络', '#03a9f4'
  ],
  [
    'React', '#61dafb'
  ]
]);