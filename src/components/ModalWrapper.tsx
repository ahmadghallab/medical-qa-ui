import React from 'react';
import { Modal } from 'antd';
import CloseIcon from './icons/Close';

interface Props {
  children: React.ReactNode;
  open: boolean;
  title: string;
  onCancel: () => void;
  width?: number;
  footer?: React.ReactNode;
}

const ModalWrapper: React.FC<Props> = ({
  children,
  footer = null,
  ...props
}) => {
  return (
    <Modal
      {...props}
      footer={footer}
      destroyOnClose={true}
      className='custom-modal'
      closeIcon={
        <CloseIcon
          style={{
            fontSize: '22px',
          }}
        />
      }
    >
      {children}
    </Modal>
  );
};

export default ModalWrapper;
