import { useRef } from 'react';

import { blogFiles } from '../config/blogSetting';

export function useBlogComponent(name: string) {
  const blogList = useRef(blogFiles);
  console.log(blogList.current)
  const component = blogList.current.find((value) =>
    value.name === name
  )?.component;

  return component;
}