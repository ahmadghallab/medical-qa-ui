import { Button, Card, Space, Typography } from 'antd';
import Stack from 'components/Stack';
import { QuestionModel } from 'models/Question';
import React from 'react';
import useQuestionsStore from 'store/questions';

interface IProps {
  data: QuestionModel;
}

const QuestionCard: React.FC<IProps> = ({ data }) => {
  const handleEdit = useQuestionsStore((state) => state.handleEditDialog);

  const handleDelete = useQuestionsStore((state) => state.handleDeleteDialog);

  return (
    <Card style={{ height: '100%' }}>
      <Stack>
        <Typography.Title style={{ marginBottom: 0 }} level={3} ellipsis={true}>
          {data.question}
        </Typography.Title>
        <Space>
          <Button type='text' onClick={() => handleEdit(data)}>
            View/Edit
          </Button>
          <Button type='text' danger onClick={() => handleDelete(data)}>
            Delete
          </Button>
        </Space>
      </Stack>
    </Card>
  );
};

export default QuestionCard;
