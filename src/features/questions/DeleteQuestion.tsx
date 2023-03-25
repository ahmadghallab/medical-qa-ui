import { Button, Typography } from 'antd';
import ModalWrapper from 'components/ModalWrapper';
import useCacheDelete from 'hooks/useCacheMutation/useCacheDelete';
import useMutation from 'hooks/useMutation';
import React from 'react';
import { CacheKey } from 'models/Common';
import useQuestionsStore from 'store/questions';

const DeleteQuestion: React.FC<{ cacheKey: CacheKey }> = ({ cacheKey }) => {
  const { paginatedCacheDelete } = useCacheDelete();

  const open = useQuestionsStore((state) => state.deleteDialogOpen);
  const selectedQuestion = useQuestionsStore((state) => state.selectedQuestion);

  const handleCancel = useQuestionsStore((state) => state.handleDeleteDialog);

  const { doRequest, loading } = useMutation({
    onCompleted: () => {
      paginatedCacheDelete(cacheKey, selectedQuestion.id!);
      handleCancel(null);
    },
  });

  const handleSubmit = () => {
    doRequest(`questions/${selectedQuestion.id}`, {}, { method: 'delete' });
  };

  return (
    <ModalWrapper
      open={open}
      title='Delete question'
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
          You are about to delete question.{' '}
          <strong>This action can not be undone!</strong>
        </Typography.Paragraph>
      )}
    </ModalWrapper>
  );
};

export default DeleteQuestion;
