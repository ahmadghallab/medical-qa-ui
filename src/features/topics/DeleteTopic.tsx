import { Button, Typography } from 'antd';
import ModalWrapper from 'components/ModalWrapper';
import useCacheDelete from 'hooks/useCacheMutation/useCacheDelete';
import useMutation from 'hooks/useMutation';
import React from 'react';
import { CacheKey } from 'models/Common';
import useTopicsStore from 'store/topics';

const DeleteTopic: React.FC<{ cacheKey: CacheKey }> = ({ cacheKey }) => {
  const { paginatedCacheDelete } = useCacheDelete();

  const open = useTopicsStore((state) => state.deleteDialogOpen);
  const selectedTopic = useTopicsStore((state) => state.selectedTopic);

  const handleCancel = useTopicsStore((state) => state.handleDeleteDialog);

  const { doRequest, loading } = useMutation({
    onCompleted: () => {
      paginatedCacheDelete(cacheKey, selectedTopic.id!);
      handleCancel(null);
    },
  });

  const handleSubmit = () => {
    doRequest(`topics/${selectedTopic.id}`, {}, { method: 'delete' });
  };

  return (
    <ModalWrapper
      open={open}
      title='Delete topic'
      onCancel={() => handleCancel(null)}
      footer={
        <Button
          type='primary'
          danger
          loading={loading}
          onClick={handleSubmit}
          size='large'
        >
          Delete
        </Button>
      }
    >
      {open && (
        <Typography.Paragraph>
          You are about to delete topic <strong>{selectedTopic.name}</strong>
        </Typography.Paragraph>
      )}
    </ModalWrapper>
  );
};

export default DeleteTopic;
