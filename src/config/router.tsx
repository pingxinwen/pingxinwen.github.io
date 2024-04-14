import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../view/home';
import BlogHome from '../view/blogHome';
import BlogContent from '../view/blogContent';
import Loading from '../component/loading';

export const MyRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<BlogHome />} />
    <Route path="/article" element={<BlogHome />} />
    <Route
      path="/article/:name"
      element={
        <Suspense fallback={<Loading />}>
          <BlogContent />
        </Suspense>
      }
    />
  </Routes>
);
