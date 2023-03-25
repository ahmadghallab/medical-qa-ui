import { Button, Col, Row, Typography } from 'antd';
import useBranchesStore from 'store/branches';

const BranchesListHeader = () => {
  const handleAdd = useBranchesStore((state) => state.handleAddDialog);

  return (
    <Row style={{ marginBottom: 16 }}>
      <Col flex='auto'>
        <Typography.Title level={2} style={{ marginBottom: 0 }}>
          Branches
        </Typography.Title>
        <Typography.Text type='secondary' style={{ marginBottom: 0 }}>
          List of all branches
        </Typography.Text>
      </Col>
      <Col flex='none'>
        <Button type='primary' onClick={() => handleAdd()} size='large'>
          Add Branch
        </Button>
      </Col>
    </Row>
  );
};

export default BranchesListHeader;
