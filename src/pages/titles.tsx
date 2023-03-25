import Error from 'components/Error';
import { useParams } from 'react-router-dom';
import TitlesList from 'features/titles';

const Titles = () => {
  const { topicId } = useParams();

  if (!topicId) return <Error error={{ response: { status: 404 } }} />;

  return <TitlesList topicId={topicId} />;
};

export default Titles;
