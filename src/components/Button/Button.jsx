import React from "react"
import classnames from "classnames"

const Button = React.forwardRef(function Button({ children, className, size, variant, ...rest }, ref) {
    const sizeClass = size && `button-${size}`
    const variantClass = variant && `button-${variant}`
    const allClasses = classnames(sizeClass, variantClass, className)

    return (
        <button ref={ref} className={allClasses} {...rest}>
            {children}
        </button>
    )
})

export default Button
