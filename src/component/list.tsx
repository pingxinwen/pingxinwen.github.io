import './style/list.less';
import { Fragment, HTMLAttributes, useState } from 'react';
import dayjs from 'dayjs';
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
  ) : data;

  console.log('datasource:', datasource);

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
          ) : <div className="list-filter-content">全部文章</div>
        }
      </div>
      {
        datasource.map(value => (
          <div className="list-item" key={value.name}>
            <div className="list-item-title">
              <Link className="list-item-link" to={`/article/${value.name}`}>{value.title}</Link>
              <span className="list-item-date">{dayjs(value.date).format('YYYY-MM-DD')}</span>
            </div>
            <div className="list-item-tag">
              {
                value.tags.sort().map(tag => {
                  const color = tagColor.get(tag);
                  return (
                    <Tag color={color} key={tag} onClick={() => setKey(tag)}>{tag}</Tag>
                  );
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
  color?: string,
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
  );
}
