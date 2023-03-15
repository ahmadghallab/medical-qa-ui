import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Icon from '@ant-design/icons';

const CloseSvg = () => (
  <svg
    viewBox='0 0 24 24'
    focusable='false'
    data-icon='close'
    width='1em'
    height='1em'
    fill='currentColor'
    aria-hidden='true'
  >
    <path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
  </svg>
);

const CloseIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={CloseSvg} {...props} />
);

export default CloseIcon;
