import Error from 'components/Error';
import PageStaticHeader from 'components/PageStaticHeader';
import { useParams } from 'react-router-dom';
import TopicsList from 'features/topics';

const Topics = () => {
  const { branchId } = useParams();

  if (!branchId) return <Error error={{ response: { status: 404 } }} />;

  return (
    <>
      <PageStaticHeader title='Topics' description="Let's Get Started" />

      <TopicsList branchId={branchId} />
    </>
  );
};

export default Topics;
