import ModalWrapper from 'components/ModalWrapper';
import useCacheAdd from 'hooks/useCacheMutation/useCacheAdd';
import useMutation from 'hooks/useMutation';
import React from 'react';
import BranchForm from './BranchForm';
import { CacheKey } from 'models/Common';
import useBranchesStore from 'store/branches';
import { BranchModel } from 'models/Branch';

const AddBranch: React.FC<{ cacheKey: CacheKey }> = ({ cacheKey }) => {
  const open = useBranchesStore((state) => state.addDialogOpen);

  const handleCancel = useBranchesStore((state) => state.handleAddDialog);

  const { paginatedCacheAdd } = useCacheAdd();

  const { doRequest, loading } = useMutation({
    onCompleted: (data: any) => {
      paginatedCacheAdd(cacheKey, data);
      handleCancel();
    },
  });

  const handleSubmit = (values: BranchModel) => {
    doRequest('/branches', values, { method: 'post' });
  };

  return (
    <ModalWrapper
      open={open}
      title='Add branch'
      onCancel={() => handleCancel()}
    >
      <BranchForm
        handleSubmit={handleSubmit}
        loading={loading}
        defaultValues={{}}
      />
    </ModalWrapper>
  );
};

export default AddBranch;
