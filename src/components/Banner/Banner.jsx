import React from 'react'
import './Banner.css'
import { FaCheckCircle } from "react-icons/fa"
import { IoIosWarning } from "react-icons/io"
import { FaCircleXmark } from "react-icons/fa6"
import { HiMiniInformationCircle } from "react-icons/hi2"

const headlineMap = {
    success: 'Congratulations',
    error: 'There is a problem with your application',
    warning: 'Attention',
    neutral: 'Update available'
}

const iconMap = {
    success: FaCheckCircle,
    error: FaCircleXmark,
    warning: IoIosWarning,
    neutral: HiMiniInformationCircle
}

const Banner = React.forwardRef(function Banner({ children, status, variant = 'single', ...rest }, ref) {
    const headline = headlineMap[status] || ''
    const Icon = iconMap[status]

    return (
        <div ref={ref} className={`banner banner-${status} banner-${variant}`} role="alert" {...rest}>
            {Icon && <Icon className={`banner-icon-${status}`} />}
            {variant === 'single' && (
                <h1 className={`banner-heading-${status}`}>{headline}</h1>
            )}
            {variant === 'multi' && (
                <div>
                    <h1 className={`banner-heading-${status}`}>{headline}</h1>
                    <p>{children}</p>
                </div>
            )}
        </div>
    )
})

export default Banner
