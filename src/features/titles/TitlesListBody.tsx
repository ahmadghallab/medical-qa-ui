import { Col, Row, Skeleton } from 'antd';
import { TitleModel } from 'models/Title';
import TitleCard from './TitleCard';

const TitlesListBody = ({ dataSource }) => {
  if (!dataSource) return <Skeleton />;

  return (
    <Row gutter={[24, 24]} className='fade-in-up'>
      {dataSource.raw.map((data: TitleModel) => (
        <Col xs={24} md={8} key={data.id}>
          <TitleCard data={data} />
        </Col>
      ))}
    </Row>
  );
};

export default TitlesListBody;
