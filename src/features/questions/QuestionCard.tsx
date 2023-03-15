import { Button, List, Typography } from 'antd';
import { QuestionModel } from 'models/Question';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  data: QuestionModel;
}

const QuestionCard: React.FC<IProps> = ({ data }) => {
  return (
    <List.Item actions={[<Button>Edit</Button>]}>
      <Typography.Title level={5} style={{ marginBottom: 0 }}>
        <Link to={`/questions/title/${data.id}`}>{data.question}</Link>
      </Typography.Title>
    </List.Item>
  );
};

export default QuestionCard;
