import { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Components } from '@mdx-js/react/lib';
import CodeBlock from './code';

interface BlogProps {
  children: ReactNode;
};

const getClassName = (name:string)=> `blog-content-${name}`;

/**
 * 对每一个html元素都增加了className
 * 使用className修改元素样式而不是直接修改
 */

type MDXComponent = (props: { children: ReactNode }) => JSX.Element;

const H1:MDXComponent = (props) => <h1 className={getClassName('h1')} >{props.children}</h1>;

const H2:MDXComponent = (props) => <h2 className={getClassName('h2')} >{props.children}</h2>;

const H3:MDXComponent = (props) => <h3 className={getClassName('h3')} >{props.children}</h3>;

const H4:MDXComponent = (props) => <h4 className={getClassName('h4')} >{props.children}</h4>;

const H5:MDXComponent = (props) => <h5 className={getClassName('h5')} >{props.children}</h5>;

const H6:MDXComponent = (props) => <h6 className={getClassName('h6')} >{props.children}</h6>;

const MDXComponents: Components = {
  h1:H1,
  h2:H2,
  h3:H3,
  h4:H4,
  h5:H5,
  h6:H6,
  p: (props) => <p className={getClassName('p')} >{props.children}</p>,
  a: (props) => <a {...props} className={getClassName('a')} >{props.children}</a>,
  blockquote:(props) => <blockquote className={getClassName('blockquote')} >{props.children}</blockquote>,
  pre:(props) => <pre className={getClassName('pre')} >{props.children}</pre>,
  code: CodeBlock as any,
  inlineCode: (props) => <code className={getClassName('inlinecode')} >{props.children}</code>,
  ol:(props) => <ol {...props} className={getClassName('ol')}>{props.children}</ol>,
  ul:(props) => <ul {...props} className={getClassName('ul')}>{props.children}</ul>,
  li:(props) => <li {...props} className={getClassName('li')}>{props.children}</li>,
};

export default function Blog(props: BlogProps) {
  return (
    <section className="blog-content">
      <MDXProvider components={MDXComponents} >
        {props.children}
      </MDXProvider>
    </section>
  );
};
