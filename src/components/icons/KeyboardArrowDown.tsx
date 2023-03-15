import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Icon from '@ant-design/icons';

const KeyboardArrowDownSvg = () => (
  <svg width='1em' height='1em' fill='currentColor' viewBox='0 0 24 24'>
    <path d='M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'></path>
  </svg>
);

const KeyboardArrowDownIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={KeyboardArrowDownSvg} {...props} />
);

export default KeyboardArrowDownIcon;
