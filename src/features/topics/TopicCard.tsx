import { Button, Card, Space, Typography } from 'antd';
import Stack from 'components/Stack';
import { IParams } from 'models/Common';
import { TopicModel } from 'models/Topic';
import React from 'react';
import { Link } from 'react-router-dom';
import useTopicsStore from 'store/topics';

interface IProps {
  data: TopicModel;
  params: IParams;
}

const TopicCard: React.FC<IProps> = ({ data, params }) => {
  const handleEdit = useTopicsStore((state) => state.handleEditDialog);

  const handleDelete = useTopicsStore((state) => state.handleDeleteDialog);

  return (
    <Card style={{ height: '100%' }}>
      <Stack>
        <Typography.Title style={{ marginBottom: 0 }} level={3}>
          <Link
            to={`/titles/topic/${data.id}?topic-name=${data.name}&branch-id=${params.branchId}&branch-name=${params.branchName}`}
          >
            {data.name}
          </Link>
        </Typography.Title>
        <Space>
          <Button type='text' onClick={() => handleEdit(data)}>
            Edit
          </Button>
          <Button type='text' danger onClick={() => handleDelete(data)}>
            Delete
          </Button>
        </Space>
      </Stack>
    </Card>
  );
};

export default TopicCard;
