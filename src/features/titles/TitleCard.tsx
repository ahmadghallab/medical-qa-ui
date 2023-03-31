import { Button, Card, Space, Typography } from 'antd';
import Stack from 'components/Stack';
import { IParams } from 'models/Common';
import { TitleModel } from 'models/Title';
import React from 'react';
import { Link } from 'react-router-dom';
import useTitlesStore from 'store/titles';

interface IProps {
  data: TitleModel;
  params: IParams;
}

const TitleCard: React.FC<IProps> = ({ data, params }) => {
  const handleEdit = useTitlesStore((state) => state.handleEditDialog);

  const handleDelete = useTitlesStore((state) => state.handleDeleteDialog);

  return (
    <Card style={{ height: '100%' }}>
      <Stack>
        <Typography.Title style={{ marginBottom: 0 }} level={3} ellipsis={true}>
          <Link
            to={`/questions/title/${data.id}?title-name=${data.name}&topic-id=${params.topicId}&topic-name=${params.topicName}&branch-id=${params.branchId}&branch-name=${params.branchName}`}
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

export default TitleCard;
