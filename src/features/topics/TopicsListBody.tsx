import { Col, Row, Skeleton } from 'antd';
import NoData from 'components/NoData';
import { TopicModel } from 'models/Topic';
import TopicCard from './TopicCard';

const TopicsListBody = ({ dataSource }) => {
  if (!dataSource) return <Skeleton />;

  if (dataSource.count === 0) return <NoData name='topics' />;

  return (
    <Row gutter={[24, 24]} className='fade-in-up'>
      {dataSource.raw.map((data: TopicModel) => (
        <Col xs={24} key={data.id}>
          <TopicCard data={data} />
        </Col>
      ))}
    </Row>
  );
};

export default TopicsListBody;
