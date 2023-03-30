import { Button, Col, Row, Typography } from 'antd';
import useQuestionsStore from 'store/questions';

const QuestionsListHeader = () => {
  const handleAdd = useQuestionsStore((state) => state.handleAddDialog);

  return (
    <Row style={{ marginBottom: 24 }} align='middle'>
      <Col flex='auto'>
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Questions
        </Typography.Title>
      </Col>
      <Col flex='none'>
        <Button type='primary' onClick={() => handleAdd()} size='large'>
          Add Question
        </Button>
      </Col>
    </Row>
  );
};

export default QuestionsListHeader;
