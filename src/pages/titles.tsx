import Error from 'components/Error';
import PageStaticHeader from 'components/PageStaticHeader';
import { useParams } from 'react-router-dom';
import TitlesList from 'features/titles';

const Titles = () => {
  const { topicId } = useParams();

  if (!topicId) return <Error error={{ response: { status: 404 } }} />;

  return (
    <>
      <PageStaticHeader title='Titles' description="Let's Get Started" />

      <TitlesList topicId={topicId} />
    </>
  );
};

export default Titles;
