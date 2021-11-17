import './style/list.less';
import React, { Fragment, HTMLAttributes, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogSet } from '../config/blogSetting';

interface IListProps extends HTMLAttributes<HTMLDivElement> {
  data: BlogSet[];
  tagColor: Map<string, string>;
}

export default function List(props: IListProps) {
  const { data, tagColor } = props;
  const [key, setKey] = useState('');
  const datasource = key ? data.filter(v =>
    v.tags.includes(key)
  ) : data
  return (
    <div className="list">
      <div className="list-filter">
        {
          key ? (
            <Fragment>
              <div className="list-filter-content">
                <span>筛选：</span>
                <Tag color={tagColor.get(key)}>{key}</Tag>
              </div>
              <button onClick={() => setKey('')}>清除</button>
            </Fragment>
          ) : null
        }
      </div>
      {
        datasource.map(value => (
          <div className="list-item" key={value.name}>
            <div className="list-item-title">
              <Link to={`/article/${value.name}`}>{value.title}</Link>
            </div>
            <div className="list-item-tag">
              {
                value.tags.sort().map(tag => {
                  const color = tagColor.get(tag);
                  return (
                    <Tag color={color} key={tag} onClick={() => setKey(tag)}>{tag}</Tag>
                  )
                })
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}

interface ITagProps extends HTMLAttributes<HTMLParagraphElement> {
  color: string,
}

function Tag(props: ITagProps) {
  return (
    <p
      className="tag"
      onClick={props.onClick}
      style={{ background: props.color }}
    >
      {props.children}
    </p>
  )
}