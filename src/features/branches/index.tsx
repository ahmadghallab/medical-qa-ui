import Error from 'components/Error';
import Paginator from 'components/Paginator';
import useQuery from 'hooks/useQuery';
import { useState } from 'react';
import AddBranch from './AddBranch';
import BranchesListBody from './BranchesListBody';
import BranchesListHeader from './BranchesListHeader';
import DeleteBranch from './DeleteBranch';
import EditBranch from './EditBranch';

const Branches = () => {
  const [pageNo, setPageNo] = useState(1);

  const handlePageChange = (value: number) => {
    setPageNo(value);
  };

  const cacheKey = {
    url: `/branches?page=${pageNo}`,
  };

  const { data, error } = useQuery({
    cacheKey,
  });

  if (error) return <Error error={error} />;

  return (
    <>
      <BranchesListHeader />
      <BranchesListBody dataSource={data} />

      <Paginator
        dataSource={data}
        page={pageNo}
        handlePageChange={handlePageChange}
      />

      <AddBranch cacheKey={cacheKey} />
      <EditBranch cacheKey={cacheKey} />
      <DeleteBranch cacheKey={cacheKey} />
    </>
  );
};

export default Branches;
