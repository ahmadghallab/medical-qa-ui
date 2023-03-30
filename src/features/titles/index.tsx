import Error from 'components/Error';
import useQuery from 'hooks/useQuery';
import { IParams } from 'models/Common';
import AddTitle from './AddTitle';
import DeleteTitle from './DeleteTitle';
import EditTitle from './EditTitle';
import TitlesListBody from './TitlesListBody';
import TitlesListHeader from './TitlesListHeader';

interface IProps {
  params: IParams;
}

const Titles = ({ params }: IProps) => {
  const cacheKey = {
    url: `/titles/topic/${params.topicId}`,
  };

  const { data, error } = useQuery({
    cacheKey,
  });

  if (error) return <Error error={error} />;

  return (
    <>
      <TitlesListHeader />
      <TitlesListBody dataSource={data} params={params} />

      <AddTitle cacheKey={cacheKey} topicId={params.topicId} />
      <EditTitle cacheKey={cacheKey} />
      <DeleteTitle cacheKey={cacheKey} />
    </>
  );
};

export default Titles;
