import Error from 'components/Error';
import { useLocation, useParams } from 'react-router-dom';
import QuestionsList from 'features/questions';

const useQueryParam = () => new URLSearchParams(useLocation().search);

const Questions = () => {
  const { titleId } = useParams();
  const titleName = useQueryParam().get('n');

  if (!titleId) return <Error error={{ response: { status: 404 } }} />;

  return <QuestionsList titleId={titleId} titleName={titleName} />;
};

export default Questions;
