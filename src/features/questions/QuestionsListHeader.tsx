import { Button, Col, Row, Typography } from 'antd';
import useQuestionsStore from 'store/questions';

const QuestionsListHeader = () => {
  const handleAdd = useQuestionsStore((state) => state.handleAddDialog);

  return (
    <Row style={{ marginBottom: 16 }}>
      <Col flex='auto'>
        <Typography.Title level={2} style={{ marginBottom: 0 }}>
          Questions
        </Typography.Title>
        <Typography.Text type='secondary' style={{ marginBottom: 0 }}>
          List of all questions
        </Typography.Text>
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
