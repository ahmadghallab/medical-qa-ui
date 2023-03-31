import React, { ReactNode } from 'react';
import { Layout } from 'antd';

interface IProps {
  children: ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Content>
        <div
          style={{ maxWidth: 1050, margin: '50px auto' }}
          className='fade-in-up'
        >
          {children}
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default MainLayout;
