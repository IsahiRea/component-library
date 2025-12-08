import React from 'react'
import classnames from 'classnames'

const Badge = React.forwardRef(function Badge({ children, className, type, color, ...rest }, ref) {
    const allClasses = classnames(
        'badge',
        {
            [`badge-${type}`]: type,
            [`badge-${color}`]: color,
        },
        className
    )

    return (
        <div ref={ref} className={allClasses} {...rest}>
            {children}
        </div>
    )
})

export default Badge
