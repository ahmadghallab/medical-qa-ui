import { Col, Row, Skeleton } from 'antd';
import NoData from 'components/NoData';
import { BranchModel } from 'models/Branch';
import BranchCard from './BranchCard';

interface IProps {
  dataSource: { raw: BranchModel[]; count: number };
}

const BranchesListBody = ({ dataSource }: IProps) => {
  if (!dataSource) return <Skeleton />;

  if (dataSource.count === 0) return <NoData name='branches' />;

  return (
    <Row gutter={[24, 24]} className='fade-in-up'>
      {dataSource.raw.map((data: BranchModel) => (
        <Col xs={24} key={data.id}>
          <BranchCard data={data} />
        </Col>
      ))}
    </Row>
  );
};

export default BranchesListBody;
