import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { BreadcrumbItem } from 'models/Common';
import ArrowForwardIosIcon from './icons/ArrowForwardIos';

interface IProps {
  items: BreadcrumbItem[];
  marginBottom?: number;
}

const BreadcrumbWrapper = ({ items, marginBottom = 24 }: IProps) => {
  return (
    <Breadcrumb
      className='fade-in-up'
      style={{ marginBottom }}
      separator={<ArrowForwardIosIcon />}
    >
      {items.map((el: BreadcrumbItem, i: number) => (
        <Breadcrumb.Item key={i}>
          {el.path ? <Link to={el.path}>{el.label}</Link> : el.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbWrapper;
