import './style.less';
import '@icon-park/react/styles/index.css';

import { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MyHeader } from './component/header';
import MyRoutes from './config/router';

export default (): JSX.Element => {
  return (
    <Fragment>
      <Router>
        <MyHeader />
        <main className='main'>
          <div className="container-glass">
            <MyRoutes />
          </div>
        </main>
      </Router>
    </Fragment>
  );
};
