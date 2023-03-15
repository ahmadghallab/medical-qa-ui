import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Icon from '@ant-design/icons';

const ArrowForwardIosSvg = () => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' fill='currentColor'>
    <path d='M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z'></path>
  </svg>
);

const ArrowForwardIosIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ArrowForwardIosSvg} {...props} />
);

export default ArrowForwardIosIcon;
