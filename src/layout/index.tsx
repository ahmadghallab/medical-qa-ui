import React, { ReactNode } from 'react';
import { Layout } from 'antd';

interface IProps {
  children: ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Content>
        <div style={{ maxWidth: 1050, margin: '50px auto' }}>{children}</div>
      </Layout.Content>
    </Layout>
  );
};

export default MainLayout;
