import { Button, Col, Row, Typography } from 'antd';
import useTitlesStore from 'store/titles';

const TitlesListHeader = () => {
  const handleAdd = useTitlesStore((state) => state.handleAddDialog);

  return (
    <Row style={{ marginBottom: 24 }} align='middle'>
      <Col flex='auto'>
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Titles
        </Typography.Title>
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
