import { WarningOutlined } from '@ant-design/icons';
import { Row, Space, theme, Typography } from 'antd';

const ServerError = ({ message }: { message: string }) => {
  const {
    token: { colorText },
  } = theme.useToken();

  return (
    <Row
      align='middle'
      justify='center'
      style={{ margin: 24 }}
      className='fade-in-up'
    >
      <Space direction='vertical' align='center'>
        <WarningOutlined style={{ fontSize: '2em', color: colorText }} />
        <Typography.Text>{message}</Typography.Text>
      </Space>
    </Row>
  );
};

export default ServerError;
