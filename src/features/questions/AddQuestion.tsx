import ModalWrapper from 'components/ModalWrapper';
import useCacheAdd from 'hooks/useCacheMutation/useCacheAdd';
import useMutation from 'hooks/useMutation';
import React from 'react';
import QuestionForm from './QuestionForm';
import { CacheKey } from 'models/Common';
import useQuestionsStore from 'store/questions';
import { QuestionModel } from 'models/Question';

interface IProps {
  cacheKey: CacheKey;
  titleId: string;
}

const AddQuestion: React.FC<IProps> = ({ cacheKey, titleId }) => {
  const open = useQuestionsStore((state) => state.addDialogOpen);

  const handleCancel = useQuestionsStore((state) => state.handleAddDialog);

  const { paginatedCacheAdd } = useCacheAdd();

  const { doRequest, loading } = useMutation({
    onCompleted: (data: any) => {
      paginatedCacheAdd(cacheKey, data);
      handleCancel();
    },
  });

  const handleSubmit = (values: QuestionModel) => {
    doRequest(
      '/questions',
      { ...values, title_id: titleId },
      { method: 'post' }
    );
  };

  return (
    <ModalWrapper
      open={open}
      title='Add question'
      onCancel={() => handleCancel()}
      width={1000}
    >
      <QuestionForm
        handleSubmit={handleSubmit}
        loading={loading}
        defaultValues={{}}
      />
    </ModalWrapper>
  );
};

export default AddQuestion;
