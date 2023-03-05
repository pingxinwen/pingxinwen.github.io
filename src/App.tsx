import './style.less';
import '@icon-park/react/styles/index.css';

import { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MyHeader } from './component/header';
import MyRoutes from './config/router';
import { ClickTop } from './component/clickTop';
import { PercentBar } from './component/percentBar';

export default (): JSX.Element => {
  return (
    <Fragment>
      <Router>
        <PercentBar />
        <MyHeader />
        <main className='main'>
          <div className="container-glass">
            <MyRoutes />
          </div>
        </main>
      </Router>
      <ClickTop />
    </Fragment>
  );
};
