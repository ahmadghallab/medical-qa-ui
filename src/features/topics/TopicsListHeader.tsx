import { Button, Col, Row, Typography } from 'antd';
import useTopicsStore from 'store/topics';

const TopicsListHeader = () => {
  const handleAdd = useTopicsStore((state) => state.handleAddDialog);

  return (
    <Row style={{ marginBottom: 16 }}>
      <Col flex='auto'>
        <Typography.Title level={2} style={{ marginBottom: 0 }}>
          Topics
        </Typography.Title>
        <Typography.Text type='secondary' style={{ marginBottom: 0 }}>
          List of all topics
        </Typography.Text>
      </Col>
      <Col flex='none'>
        <Button type='primary' onClick={() => handleAdd()} size='large'>
          Add Topic
        </Button>
      </Col>
    </Row>
  );
};

export default TopicsListHeader;
