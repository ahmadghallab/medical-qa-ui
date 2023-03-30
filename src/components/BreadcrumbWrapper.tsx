import { Breadcrumb } from 'antd';
import { BreadcrumbItem } from 'models/Common';
import ArrowForwardIosIcon from './icons/ArrowForwardIos';

interface IProps {
  items: BreadcrumbItem[];
  marginBottom?: number;
}

const BreadcrumbWrapper = ({ items, marginBottom = 8 }: IProps) => {
  return (
    <Breadcrumb
      className='fade-in-up'
      style={{ marginBottom }}
      separator={<ArrowForwardIosIcon />}
      items={items}
    />
  );
};

export default BreadcrumbWrapper;
