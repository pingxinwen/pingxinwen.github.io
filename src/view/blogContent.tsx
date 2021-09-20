import React from 'react';
import { useParams } from 'react-router-dom';
import Blog from "../component/blog";
import { useBlogComponent } from '../hooks/blog';

type BlogParams = {
  name: string
}

export default function BlogContent() {
  const { name } = useParams<BlogParams>();
  const Component = useBlogComponent(name);
  return (
    <Blog>
      <Component />
    </Blog>
  )
};
