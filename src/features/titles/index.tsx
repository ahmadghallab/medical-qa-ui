import Error from 'components/Error';
import useQuery from 'hooks/useQuery';
import AddTitle from './AddTitle';
import DeleteTitle from './DeleteTitle';
import EditTitle from './EditTitle';
import TitlesListBody from './TitlesListBody';
import TitlesListHeader from './TitlesListHeader';

interface IProps {
  topicId: string;
}

const Titles = ({ topicId }: IProps) => {
  const cacheKey = {
    url: `/titles/topic/${topicId}`,
  };

  const { data, error } = useQuery({
    cacheKey,
  });

  if (error) return <Error error={error} />;

  return (
    <>
      <TitlesListHeader />
      <TitlesListBody dataSource={data} />

      <AddTitle cacheKey={cacheKey} topicId={topicId} />
      <EditTitle cacheKey={cacheKey} />
      <DeleteTitle cacheKey={cacheKey} />
    </>
  );
};

export default Titles;
