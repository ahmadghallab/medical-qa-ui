import Error from 'components/Error';
import useQuery from 'hooks/useQuery';
import AddQuestion from './AddQuestion';
import DeleteQuestion from './DeleteQuestion';
import EditQuestion from './EditQuestion';
import QuestionsListBody from './QuestionsListBody';
import QuestionsListHeader from './QuestionsListHeader';

interface IProps {
  titleId: string;
}

const Titles = ({ titleId }: IProps) => {
  const cacheKey = {
    url: `/questions/title/${titleId}`,
  };

  const { data, error } = useQuery({
    cacheKey,
  });

  if (error) return <Error error={error} />;

  return (
    <>
      <QuestionsListHeader />
      <QuestionsListBody dataSource={data} />

      <AddQuestion cacheKey={cacheKey} titleId={titleId} />
      <EditQuestion cacheKey={cacheKey} />
      <DeleteQuestion cacheKey={cacheKey} />
    </>
  );
};

export default Titles;
