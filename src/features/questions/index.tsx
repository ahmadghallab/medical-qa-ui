import Error from 'components/Error';
import Paginator from 'components/Paginator';
import useQuery from 'hooks/useQuery';
import { useState } from 'react';
import AddQuestion from './AddQuestion';
import DeleteQuestion from './DeleteQuestion';
import EditQuestion from './EditQuestion';
import QuestionsListBody from './QuestionsListBody';
import QuestionsListHeader from './QuestionsListHeader';

interface IProps {
  titleId: string;
}

const Titles = ({ titleId }: IProps) => {
  const [pageNo, setPageNo] = useState(1);

  const handlePageChange = (value: number) => {
    setPageNo(value);
  };

  const cacheKey = {
    url: `/questions/title/${titleId}?page=${pageNo}`,
  };

  const { data, error } = useQuery({
    cacheKey,
  });

  if (error) return <Error error={error} />;

  return (
    <>
      <QuestionsListHeader />
      <QuestionsListBody dataSource={data} />

      <Paginator
        dataSource={data}
        page={pageNo}
        handlePageChange={handlePageChange}
      />

      <AddQuestion cacheKey={cacheKey} titleId={titleId} />
      <EditQuestion cacheKey={cacheKey} />
      <DeleteQuestion cacheKey={cacheKey} />
    </>
  );
};

export default Titles;
