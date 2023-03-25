import ModalWrapper from 'components/ModalWrapper';
import useCacheUpdate from 'hooks/useCacheMutation/useCacheUpdate';
import useMutation from 'hooks/useMutation';
import React from 'react';
import TopicForm from './TopicForm';
import { CacheKey } from 'models/Common';
import useTopicsStore from 'store/topics';
import { TopicModel } from 'models/Topic';

const EditTopic: React.FC<{ cacheKey: CacheKey }> = ({ cacheKey }) => {
  const open = useTopicsStore((state) => state.editDialogOpen);
  const selectedTopic = useTopicsStore((state) => state.selectedTopic);

  const handleCancel = useTopicsStore((state) => state.handleEditDialog);

  const { paginatedCacheUpdate } = useCacheUpdate();

  const { doRequest, loading } = useMutation({
    onCompleted: (data: TopicModel) => {
      paginatedCacheUpdate(cacheKey, data);
      handleCancel(null);
    },
  });

  const handleSubmit = (values: TopicModel) => {
    doRequest(`topics/${selectedTopic.id}`, values, {
      method: 'post',
    });
  };

  return (
    <ModalWrapper
      open={open}
      title='Edit topic'
      onCancel={() => handleCancel(null)}
    >
      {open && (
        <TopicForm
          defaultValues={{
            name: selectedTopic!.name,
          }}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </ModalWrapper>
  );
};

export default EditTopic;
