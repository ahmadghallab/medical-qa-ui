import { WarningTwoTone } from '@ant-design/icons';
import { Row, Space, Typography } from 'antd';

const ServerError = ({ message }: { message: string }) => {
  return (
    <Row
      align='middle'
      justify='center'
      style={{ margin: 24 }}
      className='fade-in-up'
    >
      <Space direction='vertical' align='center'>
        <WarningTwoTone />
        <Typography.Text type='secondary'>{message}</Typography.Text>
      </Space>
    </Row>
  );
};

export default ServerError;
