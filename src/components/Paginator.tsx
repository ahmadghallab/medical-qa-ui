import React from 'react';
import { Pagination, Row, Skeleton } from 'antd';

interface Props {
  dataSource: any;
  page: number;
  handlePageChange: (number: number) => void;
  size?: number;
  countFieldName?: string;
}

const Paginator: React.FC<Props> = ({
  dataSource,
  page,
  handlePageChange,
  size = 10,
  countFieldName = 'count',
}) => {
  if (!dataSource)
    return (
      <Row justify='end'>
        <Skeleton.Input size='small' />
      </Row>
    );

  if (dataSource[countFieldName] === 0) return null;

  return (
    <Row justify='end'>
      <Pagination
        onChange={handlePageChange}
        current={page}
        total={dataSource[countFieldName]}
        showSizeChanger={false}
        defaultPageSize={size}
      />
    </Row>
  );
};

export default Paginator;
