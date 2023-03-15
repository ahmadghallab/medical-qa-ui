import Error from 'components/Error';
import useQuery from 'hooks/useQuery';
import TopicsListBody from './TopicsListBody';

interface IProps {
  branchId: string;
}

const Topics = ({ branchId }: IProps) => {
  const cacheKey = {
    url: `/topics/branch/${branchId}`,
  };

  const { data, error } = useQuery({
    cacheKey,
  });

  if (error) return <Error error={error} />;

  return (
    <>
      <TopicsListBody dataSource={data} />
    </>
  );
};

export default Topics;
