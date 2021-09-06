import React, { FC } from 'react';

import Home from '../view/home';
import BlogHome from '../view/blogHome';
import BlogContent from '../view/blogContent';
import { Switch,Route } from 'react-router-dom';

const MyRoutes: FC = () => (
  <Switch>
    <Route  path="/" exact >
      <Home/>
    </Route>
    <Route  path="/blog" exact >
      <BlogHome/>
    </Route>
    <Route  path="/blog/:name" >
      <BlogContent/>
    </Route>
  </Switch>
);
export default MyRoutes;