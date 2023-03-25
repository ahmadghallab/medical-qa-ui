import ModalWrapper from 'components/ModalWrapper';
import useCacheAdd from 'hooks/useCacheMutation/useCacheAdd';
import useMutation from 'hooks/useMutation';
import React from 'react';
import TopicForm from './TopicForm';
import { CacheKey } from 'models/Common';
import useTopicsStore from 'store/topics';
import { TopicModel } from 'models/Topic';

interface IProps {
  cacheKey: CacheKey;
  branchId: string;
}

const AddTopic: React.FC<IProps> = ({ cacheKey, branchId }) => {
  const open = useTopicsStore((state) => state.addDialogOpen);

  const handleCancel = useTopicsStore((state) => state.handleAddDialog);

  const { paginatedCacheAdd } = useCacheAdd();

  const { doRequest, loading } = useMutation({
    onCompleted: (data: any) => {
      paginatedCacheAdd(cacheKey, data);
      handleCancel();
    },
  });

  const handleSubmit = (values: TopicModel) => {
    doRequest(
      '/topics',
      { ...values, branch_id: branchId },
      { method: 'post' }
    );
  };

  return (
    <ModalWrapper open={open} title='Add topic' onCancel={() => handleCancel()}>
      <TopicForm
        handleSubmit={handleSubmit}
        loading={loading}
        defaultValues={{}}
      />
    </ModalWrapper>
  );
};

export default AddTopic;
