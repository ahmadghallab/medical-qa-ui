import Error from 'components/Error';
import { Link, useLocation, useParams } from 'react-router-dom';
import QuestionsList from 'features/questions';
import BreadcrumbWrapper from 'components/BreadcrumbWrapper';

const useQueryParam = () => new URLSearchParams(useLocation().search);

const Questions = () => {
  const { titleId } = useParams();
  const titleName = useQueryParam().get('title-name');
  const topicId = useQueryParam().get('topic-id');
  const topicName = useQueryParam().get('topic-name');
  const branchId = useQueryParam().get('branch-id');
  const branchName = useQueryParam().get('branch-name');

  if (!titleId) return <Error error={{ response: { status: 404 } }} />;

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
      title: (
        <Link
          to={`/titles/topic/${topicId}?topic-name=${topicName}&branch-id=${branchId}&branch-name=${branchName}`}
        >
          {topicName}
        </Link>
      ),
      key: '3',
    },
    {
      title: titleName,
      key: '4',
    },
  ];

  return (
    <>
      <BreadcrumbWrapper items={breadcrumbItems} />
      <QuestionsList titleId={titleId} />;
    </>
  );
};

export default Questions;
