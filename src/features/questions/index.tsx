import Error from 'components/Error';
import useQuery from 'hooks/useQuery';
import TitlesListBody from './QuestionsListBody';

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
      <TitlesListBody dataSource={data} />
    </>
  );
};

export default Titles;
