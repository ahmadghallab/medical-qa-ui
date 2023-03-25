import { Col, Row, Skeleton } from 'antd';
import NoData from 'components/NoData';
import { TitleModel } from 'models/Title';
import TitleCard from './TitleCard';

const TitlesListBody = ({ dataSource }) => {
  if (!dataSource) return <Skeleton />;

  if (dataSource.count === 0) return <NoData name='titles' />;

  return (
    <Row gutter={[24, 24]} className='fade-in-up'>
      {dataSource.raw.map((data: TitleModel) => (
        <Col xs={24} key={data.id}>
          <TitleCard data={data} />
        </Col>
      ))}
    </Row>
  );
};

export default TitlesListBody;
