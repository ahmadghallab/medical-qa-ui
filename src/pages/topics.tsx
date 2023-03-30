import Error from 'components/Error';
import { Link, useLocation, useParams } from 'react-router-dom';
import TopicsList from 'features/topics';
import BreadcrumbWrapper from 'components/BreadcrumbWrapper';

const useQueryParam = () => new URLSearchParams(useLocation().search);

const Topics = () => {
  const { branchId } = useParams();
  const branchName = useQueryParam().get('branch-name');

  const params = {
    branchId,
    branchName,
  };

  if (!branchId) return <Error error={{ response: { status: 404 } }} />;

  const breadcrumbItems = [
    {
      title: <Link to='/'>All branches</Link>,
      key: '1',
    },
    {
      title: branchName,
      key: '2',
    },
  ];

  return (
    <>
      <BreadcrumbWrapper items={breadcrumbItems} />
      <TopicsList params={params} />
    </>
  );
};

export default Topics;
