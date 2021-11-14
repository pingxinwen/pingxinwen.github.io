import React, { FC } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';

const removeTag = (arg:{className:string}):object =>{
  return {...arg,className:arg.className.replace(/tag/,'').trim()}
}

interface CodeBlockProps {
  className: string;
}

const CodeBlock: FC<CodeBlockProps> = (props) => {
  const { className, children } = props;
  const language = className.replace(/language-/, '') as Language;

  return (
    <Highlight {...defaultProps} code={children.toString().trim()} language={language} theme={vsDark}>
      {
        ({ className, style, tokens, getLineProps, getTokenProps }) => (
          <code className={className + ' blog-content-codepre'} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...removeTag(getTokenProps({ token, key }))} />
                ))}
              </div>
            ))}
          </code>
        )
      }
    </Highlight>
  )
};

export default CodeBlock;