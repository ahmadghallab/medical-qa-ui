import { Col, Row, Skeleton } from 'antd';
import NoData from 'components/NoData';
import { IParams } from 'models/Common';
import { TitleModel } from 'models/Title';
import TitleCard from './TitleCard';

interface IProps {
  dataSource: { raw: TitleModel[]; count: number };
  params: IParams;
}

const TitlesListBody = ({ dataSource, params }: IProps) => {
  if (!dataSource) return <Skeleton />;

  if (dataSource.count === 0) return <NoData name='titles' />;

  return (
    <Row gutter={[24, 24]} className='fade-in-up'>
      {dataSource.raw.map((data: TitleModel) => (
        <Col xs={24} key={data.id}>
          <TitleCard data={data} params={params} />
        </Col>
      ))}
    </Row>
  );
};

export default TitlesListBody;
