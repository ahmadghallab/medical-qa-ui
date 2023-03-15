import React, { ReactNode } from 'react';

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

interface IProps {
  direction?: FlexDirection;
  justify?: string;
  align?: string;
  children: ReactNode;
}

const Stack: React.FC<IProps> = ({
  direction = 'row',
  justify = 'space-between',
  align = 'center',
  children,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {children}
    </div>
  );
};

export default Stack;
