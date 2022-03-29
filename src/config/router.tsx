import { FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../view/home";
import BlogHome from "../view/blogHome";
import BlogContent from "../view/blogContent";
import Loading from "../component/loading";

const MyRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/article" element={<BlogHome />} />
    <Route
      path="/article/:name"
      element={
        <Suspense fallback={<Loading />}>
          <BlogContent />
        </Suspense>
      }
    />
    <Route path="/test" element={
      <Suspense fallback="hello">
        {lazy( async () => ( await import('../component/test')) )}
      </Suspense>
    }></Route>
  </Routes>
);
export default MyRoutes;
