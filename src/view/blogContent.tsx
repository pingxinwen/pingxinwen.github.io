import React from 'react';
import { useParams } from 'react-router-dom';
import Blog from "../component/blog";
import { blogFiles } from '../config/blogSetting';

type BlogParams = {
  name:string
}

export default function BlogContent () {
  const {name} = useParams<BlogParams>();
  const Component = blogFiles.find((value)=>
    value.name === name
  ).componet;
  return (
    <Blog>
      <Component/>
    </Blog>
  )
};
