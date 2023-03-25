import { Button, Typography } from 'antd';
import ModalWrapper from 'components/ModalWrapper';
import useCacheDelete from 'hooks/useCacheMutation/useCacheDelete';
import useMutation from 'hooks/useMutation';
import React from 'react';
import { CacheKey } from 'models/Common';
import useBranchesStore from 'store/branches';

const DeleteBranch: React.FC<{ cacheKey: CacheKey }> = ({ cacheKey }) => {
  const { paginatedCacheDelete } = useCacheDelete();

  const open = useBranchesStore((state) => state.deleteDialogOpen);
  const selectedBranch = useBranchesStore((state) => state.selectedBranch);

  const handleCancel = useBranchesStore((state) => state.handleDeleteDialog);

  const { doRequest, loading } = useMutation({
    onCompleted: () => {
      paginatedCacheDelete(cacheKey, selectedBranch.id!);
      handleCancel(null);
    },
  });

  const handleSubmit = () => {
    doRequest(`branches/${selectedBranch.id}`, {}, { method: 'delete' });
  };

  return (
    <ModalWrapper
      open={open}
      title='Delete branch'
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
          You are about to delete branch <strong>{selectedBranch.name}</strong>
        </Typography.Paragraph>
      )}
    </ModalWrapper>
  );
};

export default DeleteBranch;
