import React from 'react';
import { Components, MDXProvider } from '@mdx-js/react';

interface BlogProps {
  children: React.ReactNode
}

/**
 * 简单的样式配置，可以直接写入less
 * 对于复杂的元素，可以：
 * 1. 在这里定制
 * 2. 重新定义组件
 */

type MDXComponent = React.ComponentType<{ children: React.ReactNode }>


const MDXComponents: Components = {
}

export default function Blog(props: BlogProps) {
  return (
    <section className="blog-content">
      <MDXProvider components={MDXComponents} >
        {props.children}
      </MDXProvider>
    </section>

  )
}