import React from 'react';
import classnames from 'classnames';

export default function Badge({children, className, type, color, ...props}) {
  
    const allClasses = classnames(
        'badge',
        {
            [`badge-${type}`]: type,
            [`badge-${color}`]: color,
        },
        className
    );  

  return (
    <div className={allClasses} {...props}>
      {children}
    </div>
  );
}