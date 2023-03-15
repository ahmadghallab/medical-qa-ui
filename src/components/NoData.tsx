import { FileTextTwoTone } from '@ant-design/icons';
import { Row, Space, Typography } from 'antd';

const NoData = ({ name = 'data' }) => {
  return (
    <Row
      align='middle'
      justify='center'
      style={{ margin: 24 }}
      className='fade-in-up'
    >
      <Space direction='vertical' align='center'>
        <FileTextTwoTone style={{ fontSize: '3em' }} />
        <Typography.Text type='secondary'>There are no {name}</Typography.Text>
      </Space>
    </Row>
  );
};

export default NoData;
