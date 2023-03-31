import Error from 'components/Error';
import Paginator from 'components/Paginator';
import useQuery from 'hooks/useQuery';
import { IParams } from 'models/Common';
import { useState } from 'react';
import AddTopic from './AddTopic';
import DeleteTopic from './DeleteTopic';
import EditTopic from './EditTopic';
import TopicsListBody from './TopicsListBody';
import TopicsListHeader from './TopicsListHeader';

interface IProps {
  params: IParams;
}

const Topics = ({ params }: IProps) => {
  const [pageNo, setPageNo] = useState(1);

  const handlePageChange = (value: number) => {
    setPageNo(value);
  };

  const cacheKey = {
    url: `/topics/branch/${params.branchId}?page=${pageNo}`,
  };

  const { data, error } = useQuery({
    cacheKey,
  });

  if (error) return <Error error={error} />;

  return (
    <>
      <TopicsListHeader />
      <TopicsListBody dataSource={data} params={params} />

      <Paginator
        dataSource={data}
        page={pageNo}
        handlePageChange={handlePageChange}
      />

      <AddTopic cacheKey={cacheKey} branchId={params.branchId} />
      <EditTopic cacheKey={cacheKey} />
      <DeleteTopic cacheKey={cacheKey} />
    </>
  );
};

export default Topics;
