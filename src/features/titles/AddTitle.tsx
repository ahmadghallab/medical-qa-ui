import ModalWrapper from 'components/ModalWrapper';
import useCacheAdd from 'hooks/useCacheMutation/useCacheAdd';
import useMutation from 'hooks/useMutation';
import React from 'react';
import TitleForm from './TitleForm';
import { CacheKey } from 'models/Common';
import useTitlesStore from 'store/titles';
import { TitleModel } from 'models/Title';

interface IProps {
  cacheKey: CacheKey;
  topicId: string;
}

const AddTitle: React.FC<IProps> = ({ cacheKey, topicId }) => {
  const open = useTitlesStore((state) => state.addDialogOpen);

  const handleCancel = useTitlesStore((state) => state.handleAddDialog);

  const { paginatedCacheAdd } = useCacheAdd();

  const { doRequest, loading } = useMutation({
    onCompleted: (data: any) => {
      paginatedCacheAdd(cacheKey, data);
      handleCancel();
    },
  });

  const handleSubmit = (values: TitleModel) => {
    doRequest('/titles', { ...values, topic_id: topicId }, { method: 'post' });
  };

  return (
    <ModalWrapper open={open} title='Add title' onCancel={() => handleCancel()}>
      <TitleForm
        handleSubmit={handleSubmit}
        loading={loading}
        defaultValues={{}}
      />
    </ModalWrapper>
  );
};

export default AddTitle;
