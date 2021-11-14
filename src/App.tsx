import './style.less';

import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MyHeader } from './component/header';
import MyRoutes from './config/router';


export default (): JSX.Element => {

  return (
    <Fragment>
      <Router>
        <MyHeader />
        <main className="container-glass">
          {/* <p>hello</p>
          <div style={{
          height:1000,
          background:'#ccc',
          backgroundRepeat:'no-repeat',
          backgroundPosition:'cover'
        }}></div> */}
          <MyRoutes />
        </main>
      </Router>
    </Fragment>
  )
}