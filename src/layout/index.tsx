import React, { ReactNode } from 'react';
import { Layout, Menu, theme } from 'antd';
import logo from 'assets/images/logo-full-yellow-symbol.svg';

const { Sider, Content } = Layout;

interface IProps {
  children: ReactNode;
}

const navMenu = [
  {
    key: '/',
    label: 'Home',
  },
  {
    key: '/heros',
    label: 'Heros',
  },
  {
    key: '/demand',
    label: 'Demand',
  },
  {
    key: '/rides',
    label: 'Rides',
  },
  {
    key: '/cash',
    label: 'Cash',
  },
];

const MainLayout: React.FC<IProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'sticky',
          top: 0,
          left: 0,
          backgroundColor: colorBgContainer,
        }}
      >
        <div style={{ margin: 24 }}>
          <img src={logo} alt='Piccup logo' width='40' />
        </div>
        <Menu
          mode='inline'
          defaultSelectedKeys={['/']}
          items={navMenu}
          style={{ backgroundColor: colorBgContainer, border: 0 }}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: '50px' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
