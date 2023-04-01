import { Button, Card, Divider, theme } from 'antd';
import { QuestionModel } from 'models/Question';
import React from 'react';
import useQuestionsStore from 'store/questions';

interface IProps {
  data: QuestionModel;
}

const QuestionCard: React.FC<IProps> = ({ data }) => {
  const { token } = theme.useToken();
  const handleEdit = useQuestionsStore((state) => state.handleEditDialog);

  const handleDelete = useQuestionsStore((state) => state.handleDeleteDialog);

  return (
    <Card
      actions={[
        <Button type='text' onClick={() => handleEdit(data)}>
          Edit
        </Button>,
        <Button type='text' danger onClick={() => handleDelete(data)}>
          Delete
        </Button>,
      ]}
      bordered={true}
      style={{ borderColor: token.colorBorder }}
    >
      <div
        style={{ marginBottom: 24 }}
        dangerouslySetInnerHTML={{ __html: data.question_html }}
      />

      <Divider
        orientation='left'
        orientationMargin='0'
        plain
        style={{ borderColor: token.colorBorder }}
      >
        Answer
      </Divider>
      {data.answer}

      <Divider
        orientation='left'
        orientationMargin='0'
        plain
        style={{ borderColor: token.colorBorder }}
      >
        Reference
      </Divider>
      {data.reference}
    </Card>
  );
};

export default QuestionCard;
