import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Spinner = ({ ...style }) => {
  return (
    <div style={{ ...style }}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Spinner;
