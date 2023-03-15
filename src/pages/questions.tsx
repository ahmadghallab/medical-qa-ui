import Error from 'components/Error';
import PageStaticHeader from 'components/PageStaticHeader';
import { useParams } from 'react-router-dom';
import QuestionsList from 'features/questions';

const Questions = () => {
  const { titleId } = useParams();

  if (!titleId) return <Error error={{ response: { status: 404 } }} />;

  return (
    <>
      <PageStaticHeader title='Questions' description="Let's Get Started" />

      <QuestionsList titleId={titleId} />
    </>
  );
};

export default Questions;
