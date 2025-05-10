import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import Replay from './page/replay';
import Request from './page/request';
import Service from './page/server';

import './App.css';

const { Header, Content, Footer } = Layout;

const nav = [
  {
    key: 1,
    label: 'Service',
  },
  {
    key: 2,
    label: 'Request',
  },
  {
    key: 3,
    label: 'Replay',
  },
];

const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState('1');

  const handleMenuSelect = (e: { key: string }) => {
    setSelectedKey(e.key);
  };

  const renderComponent = () => {
    switch (selectedKey) {
      case '1':
        return <Service />;
      case '2':
        return <Request />;
      case '3':
        return <Replay />;
      default:
        return null;
    }
  };

  return (
    <Layout className='layout'>
      <Header className='header'>
        <h1 className="logo" >Kung Fu Panda</h1>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={nav}
          style={{ flex: 1, minWidth: 0 }}
          onSelect={handleMenuSelect}
        />
      </Header>
      <Content className='content'>
        <div className='page'>
          {renderComponent()}
        </div>
      </Content>
      <Footer className='footer'>
        Kung Fu Panda ©{new Date().getFullYear()} Created by SZK
      </Footer>
    </Layout>
  );
};

export default App;