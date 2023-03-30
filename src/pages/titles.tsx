import Error from 'components/Error';
import { Link, useLocation, useParams } from 'react-router-dom';
import TitlesList from 'features/titles';
import BreadcrumbWrapper from 'components/BreadcrumbWrapper';

const useQueryParam = () => new URLSearchParams(useLocation().search);

const Titles = () => {
  const { topicId } = useParams();
  const topicName = useQueryParam().get('topic-name');
  const branchId = useQueryParam().get('branch-id');
  const branchName = useQueryParam().get('branch-name');

  const params = {
    topicId,
    topicName,
    branchId,
    branchName,
  };

  if (!topicId) return <Error error={{ response: { status: 404 } }} />;

  const breadcrumbItems = [
    {
      title: <Link to='/'>All branches</Link>,
      key: '1',
    },
    {
      title: (
        <Link to={`/topics/branch/${branchId}?branch-name=${branchName}`}>
          {branchName}
        </Link>
      ),
      key: '2',
    },
    {
      title: topicName,
      key: '3',
    },
  ];

  return (
    <>
      <BreadcrumbWrapper items={breadcrumbItems} />
      <TitlesList params={params} />;
    </>
  );
};

export default Titles;
