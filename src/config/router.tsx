import React, { FC, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../view/home';
import BlogHome from '../view/blogHome';
import BlogContent from '../view/blogContent';
import Loading from '../component/loading';

const MyRoutes: FC = () => (
  <Switch>
    <Route path="/" exact >
      <Home />
    </Route>
    <Route path="/article" exact >
      <BlogHome />
    </Route>
    <Suspense fallback={<Loading/>}>
      <Route path="/article/:name" >
        <BlogContent />
      </Route>
    </Suspense>
  </Switch>
);
export default MyRoutes;