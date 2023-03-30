import { Col, Row, Skeleton } from 'antd';
import NoData from 'components/NoData';
import { QuestionModel } from 'models/Question';
import QuestionCard from './QuestionCard';

interface IProps {
  dataSource: { raw: QuestionModel[]; count: number };
}

const QuestionsListBody = ({ dataSource }: IProps) => {
  if (!dataSource) return <Skeleton />;

  if (dataSource.count === 0) return <NoData name='questions' />;

  return (
    <Row gutter={[24, 24]} className='fade-in-up'>
      {dataSource.raw.map((data: QuestionModel) => (
        <Col xs={24} key={data.id}>
          <QuestionCard data={data} />
        </Col>
      ))}
    </Row>
  );
};

export default QuestionsListBody;
