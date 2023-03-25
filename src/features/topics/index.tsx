import Error from 'components/Error';
import useQuery from 'hooks/useQuery';
import AddTopic from './AddTopic';
import DeleteTopic from './DeleteTopic';
import EditTopic from './EditTopic';
import TopicsListBody from './TopicsListBody';
import TopicsListHeader from './TopicsListHeader';

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
      <TopicsListHeader />
      <TopicsListBody dataSource={data} />

      <AddTopic cacheKey={cacheKey} branchId={branchId} />
      <EditTopic cacheKey={cacheKey} />
      <DeleteTopic cacheKey={cacheKey} />
    </>
  );
};

export default Topics;
