import { Button, Card, Space, Typography } from 'antd';
import Stack from 'components/Stack';
import { BranchModel } from 'models/Branch';
import React from 'react';
import { Link } from 'react-router-dom';
import useBranchesStore from 'store/branches';

interface IProps {
  data: BranchModel;
}

const BranchCard: React.FC<IProps> = ({ data }) => {
  const handleEdit = useBranchesStore((state) => state.handleEditDialog);

  const handleDelete = useBranchesStore((state) => state.handleDeleteDialog);

  return (
    <Card style={{ height: '100%' }}>
      <Stack>
        <Typography.Title style={{ marginBottom: 0 }} level={3}>
          <Link to={`/topics/branch/${data.id}`}>{data.name}</Link>
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

export default BranchCard;
