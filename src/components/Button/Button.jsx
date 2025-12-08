import React from "react"
import classnames from "classnames"
import './Button.css'

const Button = React.forwardRef(function Button({ children, className, size, variant, ...rest }, ref) {
    const allClasses = classnames(
        'button',
        {
            [`button-${size}`]: size,
            [`button-${variant}`]: variant,
        },
        className
    )

    return (
        <button ref={ref} className={allClasses} {...rest}>
            {children}
        </button>
    )
})

export default Button
