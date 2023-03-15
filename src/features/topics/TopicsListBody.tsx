import { Col, Row, Skeleton } from 'antd';
import { TopicModel } from 'models/Topic';
import TopicCard from './TopicCard';

const TopicsListBody = ({ dataSource }) => {
  if (!dataSource) return <Skeleton />;

  return (
    <Row gutter={[24, 24]} className='fade-in-up'>
      {dataSource.raw.map((data: TopicModel) => (
        <Col xs={24} md={8} key={data.id}>
          <TopicCard data={data} />
        </Col>
      ))}
    </Row>
  );
};

export default TopicsListBody;
