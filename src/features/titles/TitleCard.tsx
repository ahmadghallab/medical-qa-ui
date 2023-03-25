import { Button, Card, Space, Typography } from 'antd';
import Stack from 'components/Stack';
import { TitleModel } from 'models/Title';
import React from 'react';
import { Link } from 'react-router-dom';
import useTitlesStore from 'store/titles';

interface IProps {
  data: TitleModel;
}

const TitleCard: React.FC<IProps> = ({ data }) => {
  const handleEdit = useTitlesStore((state) => state.handleEditDialog);

  const handleDelete = useTitlesStore((state) => state.handleDeleteDialog);

  return (
    <Card style={{ height: '100%' }}>
      <Stack>
        <Typography.Title style={{ marginBottom: 0 }} level={3}>
          <Link to={`/questions/title/${data.id}`}>{data.name}</Link>
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

export default TitleCard;
