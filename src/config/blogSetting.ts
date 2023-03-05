import { lazy } from 'react';
import task from './task.yaml';

type MDXComponent = (props: any) => JSX.Element | null;

/**
 * 包含单个mdx文件及其信息
 */
export interface BlogSet extends Record<string, any> {
  /**
   * mdx component
   */
  component: MDXComponent;
  /**
   * mdx文件名，用于路由id
   */
  name: string;
  /**
   * 博客文本标题
   */
  title: string;
  /**
   * 博客标签
   * for English text, make sure to use UpperCase
   */
  tags: Array<string>;
}

const modules = import.meta.glob<{ default: MDXComponent }>(
  '../../docs/*/index.mdx'
);

const blogConfig: BlogSet[] = [];

Object.keys(modules).forEach(path => {
  // debugger;
  const info = task.find(({ name }) => name && path.search(name));
  if (!info) return;
  blogConfig.push(Object.assign({}, info, { component: lazy(modules[path]) }));
});
export { blogConfig as blogFiles };

export const tagColors: Map<string, string> = new Map([
  ['Webpack', '#175d96'],
  ['Vue', '#4abf8a'],
  ['Project', '#78909c'],
  ['C', '#ffd600'],
  ['计算机网络', '#03a9f4'],
  ['React', '#61dafb'],
]);
