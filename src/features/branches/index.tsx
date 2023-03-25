import Error from 'components/Error';
import useQuery from 'hooks/useQuery';
import AddBranch from './AddBranch';
import BranchesListBody from './BranchesListBody';
import BranchesListHeader from './BranchesListHeader';
import DeleteBranch from './DeleteBranch';
import EditBranch from './EditBranch';

const cacheKey = {
  url: '/branches',
};

const Branches = () => {
  const { data, error } = useQuery({
    cacheKey,
  });

  if (error) return <Error error={error} />;

  return (
    <>
      <BranchesListHeader />
      <BranchesListBody dataSource={data} />

      <AddBranch cacheKey={cacheKey} />
      <EditBranch cacheKey={cacheKey} />
      <DeleteBranch cacheKey={cacheKey} />
    </>
  );
};

export default Branches;
