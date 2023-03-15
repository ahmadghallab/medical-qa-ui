import Error from 'components/Error';
import useQuery from 'hooks/useQuery';
import TitlesListBody from './TitlesListBody';

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
      <TitlesListBody dataSource={data} />
    </>
  );
};

export default Titles;
