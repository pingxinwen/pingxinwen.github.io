import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';

const { Header } = Layout

export function MyHeader(): JSX.Element {
  return (
    <Header className="header">
      <Row>
        <Col span={6} offset={3}>
          <div className="header-title">平信文的小站</div>
        </Col>
        <Col span={8} offset={6}>
          <ul className="header-menu">
            <li><Link to="/">首页</Link></li>
            <li><Link to="/blog">博客</Link></li>
            <li>关于</li>
          </ul>
        </Col>
      </Row>
    </Header>
  )
}