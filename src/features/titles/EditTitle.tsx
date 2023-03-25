import ModalWrapper from 'components/ModalWrapper';
import useCacheUpdate from 'hooks/useCacheMutation/useCacheUpdate';
import useMutation from 'hooks/useMutation';
import React from 'react';
import TitleForm from './TitleForm';
import { CacheKey } from 'models/Common';
import useTitlesStore from 'store/titles';
import { TitleModel } from 'models/Title';

const EditTitle: React.FC<{ cacheKey: CacheKey }> = ({ cacheKey }) => {
  const open = useTitlesStore((state) => state.editDialogOpen);
  const selectedTitle = useTitlesStore((state) => state.selectedTitle);

  const handleCancel = useTitlesStore((state) => state.handleEditDialog);

  const { paginatedCacheUpdate } = useCacheUpdate();

  const { doRequest, loading } = useMutation({
    onCompleted: (data: TitleModel) => {
      paginatedCacheUpdate(cacheKey, data);
      handleCancel(null);
    },
  });

  const handleSubmit = (values: TitleModel) => {
    doRequest(`titles/${selectedTitle.id}`, values, {
      method: 'post',
    });
  };

  return (
    <ModalWrapper
      open={open}
      title='Edit title'
      onCancel={() => handleCancel(null)}
    >
      {open && (
        <TitleForm
          defaultValues={{
            name: selectedTitle!.name,
          }}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </ModalWrapper>
  );
};

export default EditTitle;
