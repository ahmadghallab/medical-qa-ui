import Error from 'components/Error';
import Paginator from 'components/Paginator';
import useQuery from 'hooks/useQuery';
import { IParams } from 'models/Common';
import { useState } from 'react';
import AddTitle from './AddTitle';
import DeleteTitle from './DeleteTitle';
import EditTitle from './EditTitle';
import TitlesListBody from './TitlesListBody';
import TitlesListHeader from './TitlesListHeader';

interface IProps {
  params: IParams;
}

const Titles = ({ params }: IProps) => {
  const [pageNo, setPageNo] = useState(1);

  const handlePageChange = (value: number) => {
    setPageNo(value);
  };

  const cacheKey = {
    url: `/titles/topic/${params.topicId}?page=${pageNo}`,
  };

  const { data, error } = useQuery({
    cacheKey,
  });

  if (error) return <Error error={error} />;

  return (
    <>
      <TitlesListHeader />
      <TitlesListBody dataSource={data} params={params} />

      <Paginator
        dataSource={data}
        page={pageNo}
        handlePageChange={handlePageChange}
      />

      <AddTitle cacheKey={cacheKey} topicId={params.topicId} />
      <EditTitle cacheKey={cacheKey} />
      <DeleteTitle cacheKey={cacheKey} />
    </>
  );
};

export default Titles;
