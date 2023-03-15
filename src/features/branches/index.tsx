import Error from 'components/Error';
import useQuery from 'hooks/useQuery';
import BranchesListBody from './BranchesListBody';

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
      <BranchesListBody dataSource={data} />
    </>
  );
};

export default Branches;
