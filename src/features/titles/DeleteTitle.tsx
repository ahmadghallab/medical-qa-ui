import { Button, Typography } from 'antd';
import ModalWrapper from 'components/ModalWrapper';
import useCacheDelete from 'hooks/useCacheMutation/useCacheDelete';
import useMutation from 'hooks/useMutation';
import React from 'react';
import { CacheKey } from 'models/Common';
import useTitlesStore from 'store/titles';

const DeleteTitle: React.FC<{ cacheKey: CacheKey }> = ({ cacheKey }) => {
  const { paginatedCacheDelete } = useCacheDelete();

  const open = useTitlesStore((state) => state.deleteDialogOpen);
  const selectedTitle = useTitlesStore((state) => state.selectedTitle);

  const handleCancel = useTitlesStore((state) => state.handleDeleteDialog);

  const { doRequest, loading } = useMutation({
    onCompleted: () => {
      paginatedCacheDelete(cacheKey, selectedTitle.id!);
      handleCancel(null);
    },
  });

  const handleSubmit = () => {
    doRequest(`titles/${selectedTitle.id}`, {}, { method: 'delete' });
  };

  return (
    <ModalWrapper
      open={open}
      title='Delete title'
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
          You are about to delete title <strong>{selectedTitle.name}</strong>
        </Typography.Paragraph>
      )}
    </ModalWrapper>
  );
};

export default DeleteTitle;
