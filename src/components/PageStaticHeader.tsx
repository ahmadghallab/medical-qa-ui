import { Col, Row, Typography } from 'antd';
import { ReactNode } from 'react';

interface IProps {
  title: string;
  description: string;
  marginBottom?: number;
  actions?: ReactNode;
}

const PageStaticHeader = ({
  title,
  description,
  actions,
  marginBottom = 24,
}: IProps) => {
  return (
    <div
      style={{
        marginBottom,
      }}
    >
      <Row>
        <Col flex='auto'>
          <Typography.Title level={2} style={{ marginBottom: 0 }}>
            {title}
          </Typography.Title>
          <Typography.Text type='secondary' style={{ marginBottom: 0 }}>
            {description}
          </Typography.Text>
        </Col>
        <Col xs={24} md={20}>
          {actions}
        </Col>
      </Row>
    </div>
  );
};

export default PageStaticHeader;
