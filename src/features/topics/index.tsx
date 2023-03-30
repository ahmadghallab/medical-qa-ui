import Error from 'components/Error';
import useQuery from 'hooks/useQuery';
import { IParams } from 'models/Common';
import AddTopic from './AddTopic';
import DeleteTopic from './DeleteTopic';
import EditTopic from './EditTopic';
import TopicsListBody from './TopicsListBody';
import TopicsListHeader from './TopicsListHeader';

interface IProps {
  params: IParams;
}

const Topics = ({ params }: IProps) => {
  const cacheKey = {
    url: `/topics/branch/${params.branchId}`,
  };

  const { data, error } = useQuery({
    cacheKey,
  });

  if (error) return <Error error={error} />;

  return (
    <>
      <TopicsListHeader />
      <TopicsListBody dataSource={data} params={params} />

      <AddTopic cacheKey={cacheKey} branchId={params.branchId} />
      <EditTopic cacheKey={cacheKey} />
      <DeleteTopic cacheKey={cacheKey} />
    </>
  );
};

export default Topics;
