import React, { VFC } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import vsDark from '../config/theme';

const removeTag = (arg: { className: string }): object => {
  return { ...arg, className: arg.className.replace(/tag/, '').trim() }
}

interface ClipButtonProps {
  content: string | React.ReactNode;
}

const ClipButton: VFC<ClipButtonProps> = (props) => {
  const { content } = props;
  const str = typeof content === 'string'? content: content.toString().trim();
  const copy = () => {
    navigator.clipboard.writeText(str)
      .then(() => { console.log('success!') })
  }

  return (
    <div className="copy">
      <button className="copy-btn" onClick={copy}>Copy</button>
    </div>
  )
}

interface CodeBlockProps {
  className?: string;
  children: any;
}

const CodeBlock = (props: CodeBlockProps) => {
  const { className, children } = props;
  const language = className?.replace(/language-/, '') as Language;

  if(language === undefined) {
    return (<code className={'blog-content-inlinecode'} >{props.children}</code>)
  }

  return (
    <Highlight {...defaultProps} code={children.toString().trim()} language={language} theme={vsDark}>
      {
        ({ className, style, tokens, getLineProps, getTokenProps }) => (
          <code className={className + ' blog-content-codepre'} style={style}>
            <ClipButton content={children} />
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