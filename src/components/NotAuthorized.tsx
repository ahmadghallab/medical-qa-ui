import { LockTwoTone } from '@ant-design/icons';
import { Row, Space, Typography } from 'antd';

const NotAuthorized = () => {
  return (
    <Row
      align='middle'
      justify='center'
      style={{ margin: 24 }}
      className='fade-in-up'
    >
      <Space direction='vertical' align='center'>
        <LockTwoTone />
        <Typography.Text type='secondary'>
          You don't have access to this resource
        </Typography.Text>
      </Space>
    </Row>
  );
};

export default NotAuthorized;
