import ModalWrapper from 'components/ModalWrapper';
import useCacheUpdate from 'hooks/useCacheMutation/useCacheUpdate';
import useMutation from 'hooks/useMutation';
import React from 'react';
import QuestionForm from './QuestionForm';
import { CacheKey } from 'models/Common';
import useQuestionsStore from 'store/questions';
import { QuestionModel } from 'models/Question';

const EditQuestion: React.FC<{ cacheKey: CacheKey }> = ({ cacheKey }) => {
  const open = useQuestionsStore((state) => state.editDialogOpen);
  const selectedQuestion = useQuestionsStore((state) => state.selectedQuestion);

  const handleCancel = useQuestionsStore((state) => state.handleEditDialog);

  const { paginatedCacheUpdate } = useCacheUpdate();

  const { doRequest, loading } = useMutation({
    onCompleted: (data: QuestionModel) => {
      paginatedCacheUpdate(cacheKey, data);
      handleCancel(null);
    },
  });

  const handleSubmit = (values: QuestionModel) => {
    doRequest(`questions/${selectedQuestion.id}`, values, {
      method: 'post',
    });
  };

  return (
    <ModalWrapper
      open={open}
      title='Edit question'
      onCancel={() => handleCancel(null)}
      width={1000}
    >
      {open && (
        <QuestionForm
          defaultValues={{
            question: selectedQuestion.question,
            answer: selectedQuestion.answer,
            reference: selectedQuestion.reference,
          }}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </ModalWrapper>
  );
};

export default EditQuestion;
