import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Icon from '@ant-design/icons';

const ArrowOutwardSvg = () => (
  <svg width='1em' height='1em' fill='currentColor' viewBox='0 0 24 24'>
    <path d='M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z'></path>
  </svg>
);

const ArrowOutwardIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ArrowOutwardSvg} {...props} />
);

export default ArrowOutwardIcon;
