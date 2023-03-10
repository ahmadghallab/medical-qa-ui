import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const SuspenseFallback: React.FC<{ justify?: string }> = ({
  justify = 'start',
}) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: justify,
      }}
    >
      <Spin indicator={antIcon} />
    </div>
  );
};

export default SuspenseFallback;
