import { Button, Col, Row, Typography } from 'antd';
import useTitlesStore from 'store/titles';

const TitlesListHeader = () => {
  const handleAdd = useTitlesStore((state) => state.handleAddDialog);

  return (
    <Row style={{ marginBottom: 16 }}>
      <Col flex='auto'>
        <Typography.Title level={2} style={{ marginBottom: 0 }}>
          Titles
        </Typography.Title>
        <Typography.Text type='secondary' style={{ marginBottom: 0 }}>
          List of all titles
        </Typography.Text>
      </Col>
      <Col flex='none'>
        <Button type='primary' onClick={() => handleAdd()} size='large'>
          Add Title
        </Button>
      </Col>
    </Row>
  );
};

export default TitlesListHeader;
