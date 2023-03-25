import { BackwardOutlined } from '@ant-design/icons';
import { Space, theme, Typography } from 'antd';
import { Link } from 'react-router-dom';

interface IProps {
  href: string;
  title: string;
}

const GoBack = ({ href, title }: IProps) => {
  const {
    token: { colorText },
  } = theme.useToken();

  return (
    <Link to={href}>
      <Space style={{ marginBottom: 8 }}>
        <BackwardOutlined style={{ color: colorText }} />
        <Typography.Text strong>{title}</Typography.Text>
      </Space>
    </Link>
  );
};

export default GoBack;
