import { Button, Col, Row, Typography } from 'antd';
import useTopicsStore from 'store/topics';

const TopicsListHeader = () => {
  const handleAdd = useTopicsStore((state) => state.handleAddDialog);

  return (
    <Row style={{ marginBottom: 24 }} align='middle'>
      <Col flex='auto'>
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Topics
        </Typography.Title>
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
