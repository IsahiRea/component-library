import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import { HiMiniInformationCircle } from "react-icons/hi2";

export default function Banner({children, notify, type}) {
    
    const headlineMap = {
        success: 'Congratulations',
        error: 'There is a problem with your application',
        warning: 'Attention',
        neutral: 'Update available'
    };
    
    const iconMap = {
        success: <FaCheckCircle className="banner-icon-success" />,
        error: <FaCircleXmark className="banner-icon-error" />,
        warning: <IoIosWarning className="banner-icon-warning" />,
        neutral: <HiMiniInformationCircle className="banner-icon-neutral" />
    };

    const headline = headlineMap[notify] || '';
    const icon = iconMap[notify] || null;

    return (
        <div className={`banner banner-${notify} banner-${type}`}>
            {icon}
            {type === 'single' && <h1 className={`banner-heading-${notify}`}>{headline}</h1>}
            {type === 'multi' && (
                <div>
                    <h1 className={`banner-heading-${notify}`}>{headline}</h1>
                    <p>{children}</p>
                </div>
            )}
        </div>
    );
}