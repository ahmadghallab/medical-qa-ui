import { EditFilled } from '@ant-design/icons';
import { Button, Card, Typography } from 'antd';
import Stack from 'components/Stack';
import { TopicModel } from 'models/Topic';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  data: TopicModel;
}

const TopicCard: React.FC<IProps> = ({ data }) => {
  return (
    <Card style={{ height: '100%' }}>
      <Stack align='end'>
        <Typography.Title style={{ marginBottom: 0 }} level={3}>
          <Link to={`/titles/topic/${data.id}`}>{data.name}</Link>
        </Typography.Title>
        <Button icon={<EditFilled />} shape='round' type='text'>
          Edit
        </Button>
      </Stack>
    </Card>
  );
};

export default TopicCard;