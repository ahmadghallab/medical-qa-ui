import { FileTextOutlined } from '@ant-design/icons';
import { Row, Space, theme, Typography } from 'antd';

const NoData = ({ name = 'data' }) => {
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
        <FileTextOutlined style={{ fontSize: '2em', color: colorText }} />
        <Typography.Text>There are no {name}</Typography.Text>
      </Space>
    </Row>
  );
};

export default NoData;
