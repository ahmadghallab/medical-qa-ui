import { Col, Row, Skeleton } from 'antd';
import { BranchModel } from 'models/Branch';
import BranchCard from './BranchCard';

const BranchesListBody = ({ dataSource }) => {
  if (!dataSource) return <Skeleton />;

  return (
    <Row gutter={[24, 24]} className='fade-in-up'>
      {dataSource.raw.map((data: BranchModel) => (
        <Col xs={24} md={8} key={data.id}>
          <BranchCard data={data} />
        </Col>
      ))}
    </Row>
  );
};

export default BranchesListBody;
