import { List } from 'antd';
import Spinner from 'components/Spinner';
import { QuestionModel } from 'models/Question';
import QuestionCard from './QuestionCard';

const QuestionListBody = ({ dataSource }) => {
  if (!dataSource) return <Spinner />;

  return (
    <List
      size='large'
      bordered
      dataSource={dataSource.raw}
      renderItem={(item: QuestionModel) => <QuestionCard data={item} />}
    />
  );
};

export default QuestionListBody;
