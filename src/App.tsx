import 'antd/dist/antd.css';
import './style.less';

import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MyHeader } from './component/header';
import GlassContainer from './component/glass-container';
import './component/style/index';
import MyRoutes from './config/router';


export default (): JSX.Element => {

  return (
    <Fragment>
      <Router>
        <MyHeader />
        <GlassContainer >
          {/* <p>hello</p>
          <div style={{
          height:1000,
          background:'#ccc',
          backgroundRepeat:'no-repeat',
          backgroundPosition:'cover'
        }}></div> */}
          <MyRoutes />
        </GlassContainer>
      </Router>
    </Fragment>
  )
}