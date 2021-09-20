import './style/list.less';
import React,{HTMLAttributes} from 'react';
import { Link } from 'react-router-dom';
import { BlogSet } from '../config/blogSetting';

interface IListProps extends HTMLAttributes<HTMLDivElement>{
  data: BlogSet[],
  tagColor: Map<string, string>
}

export default function List(props: IListProps) {
  const { data, tagColor } = props;
  return (
    <div className="list">
      {
        data.map(value=>(
          <div className="list-item" key={value.name}>
            <div className="list-item-title">
              <Link to={`/article/${value.name}`}>{value.title}</Link>
            </div>
            <div className="list-item-tag">
              {
                value.tags.sort().map(tag =>{
                  const color = tagColor.get(tag);
                  return (
                    <Tag color={color} key={tag}>{tag}</Tag>
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
  color:string,
}

function Tag(props:ITagProps){
  return (
    <p
      className="tag"
      style={{background:props.color}}
    >
      {props.children}
    </p>
  )
}