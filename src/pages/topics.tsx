import Error from 'components/Error';
import { useParams } from 'react-router-dom';
import TopicsList from 'features/topics';

const Topics = () => {
  const { branchId } = useParams();

  if (!branchId) return <Error error={{ response: { status: 404 } }} />;

  return <TopicsList branchId={branchId} />;
};

export default Topics;
