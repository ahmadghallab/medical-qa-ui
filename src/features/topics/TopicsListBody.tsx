import { Col, Row, Skeleton } from 'antd';
import NoData from 'components/NoData';
import { IParams } from 'models/Common';
import { TopicModel } from 'models/Topic';
import TopicCard from './TopicCard';

interface IProps {
  dataSource: { raw: TopicModel[]; count: number };
  params: IParams;
}

const TopicsListBody = ({ dataSource, params }: IProps) => {
  if (!dataSource) return <Skeleton />;

  if (dataSource.count === 0) return <NoData name='topics' />;

  return (
    <Row gutter={[24, 24]} className='fade-in-up'>
      {dataSource.raw.map((data: TopicModel) => (
        <Col xs={24} key={data.id}>
          <TopicCard data={data} params={params} />
        </Col>
      ))}
    </Row>
  );
};

export default TopicsListBody;
