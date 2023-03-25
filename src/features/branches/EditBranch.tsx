import ModalWrapper from 'components/ModalWrapper';
import useCacheUpdate from 'hooks/useCacheMutation/useCacheUpdate';
import useMutation from 'hooks/useMutation';
import React from 'react';
import BranchForm from './BranchForm';
import { CacheKey } from 'models/Common';
import useBranchesStore from 'store/branches';
import { BranchModel } from 'models/Branch';

const EditBranch: React.FC<{ cacheKey: CacheKey }> = ({ cacheKey }) => {
  const open = useBranchesStore((state) => state.editDialogOpen);
  const selectedBranch = useBranchesStore((state) => state.selectedBranch);

  const handleCancel = useBranchesStore((state) => state.handleEditDialog);

  const { paginatedCacheUpdate } = useCacheUpdate();

  const { doRequest, loading } = useMutation({
    onCompleted: (data: BranchModel) => {
      paginatedCacheUpdate(cacheKey, data);
      handleCancel(null);
    },
  });

  const handleSubmit = (values: BranchModel) => {
    doRequest(`branches/${selectedBranch.id}`, values, {
      method: 'post',
    });
  };

  return (
    <ModalWrapper
      open={open}
      title='Edit branch'
      onCancel={() => handleCancel(null)}
    >
      {open && (
        <BranchForm
          defaultValues={{
            name: selectedBranch!.name,
          }}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </ModalWrapper>
  );
};

export default EditBranch;
