import PageStaticHeader from 'components/PageStaticHeader';
import BranchesList from 'features/branches';

const Branches = () => {
  return (
    <>
      <PageStaticHeader title='Branches' description="Let's Get Started" />

      <BranchesList />
    </>
  );
};

export default Branches;
