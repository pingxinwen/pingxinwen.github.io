import { useRef } from 'react';

import { blogFiles } from '../config/blogSetting';

export function useBlogComponent(name: string) {
  const blogList = useRef(blogFiles);
  const component = blogList.current.find((value) =>
    value.name === name
  ).componet;

  return component;
}