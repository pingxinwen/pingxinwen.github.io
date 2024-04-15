import { useParams } from 'react-router-dom';
import Blog from '../component/blog';
import { blogFiles } from '../config/blogSetting';

type BlogParams = {
  name: string
}

export default function BlogContent() {
  const { name } = useParams<BlogParams>();
  const Component = blogFiles.find(blog => blog.name === name)?.component;

  if (!Component) {
    //TODO: empty error
    return null;
  }

  return (
    <Blog>
      <Component />
    </Blog>
  );
};
