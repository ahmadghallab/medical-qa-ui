import React from 'react';
import { Button, Pagination, PaginationProps, Row, Skeleton } from 'antd';

interface Props {
  dataSource: any;
  page: number;
  handlePageChange: (number: number) => void;
}

const itemRender: PaginationProps['itemRender'] = (
  _,
  type,
  originalElement
) => {
  if (type === 'prev') {
    return <Button ghost>Prev</Button>;
  }
  if (type === 'next') {
    return <Button ghost>Next</Button>;
  }
  return originalElement;
};

const Paginator: React.FC<Props> = ({ dataSource, page, handlePageChange }) => {
  if (!dataSource)
    return (
      <Row justify='start' style={{ marginTop: 35 }}>
        <Skeleton.Input size='small' />;
      </Row>
    );

  if (dataSource.count === 0) return null;

  return (
    <Row justify='start' style={{ marginTop: 35 }}>
      <Pagination
        onChange={handlePageChange}
        current={page}
        total={dataSource.count}
        showSizeChanger={false}
        defaultPageSize={25}
        style={{ fontWeight: 500 }}
        itemRender={itemRender}
        showLessItems={true}
      />
    </Row>
  );
};

export default Paginator;
