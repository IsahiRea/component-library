import React from 'react'

const Card = React.forwardRef(function Card({ children, icon: Icon, title, ...rest }, ref) {
    return (
        <div ref={ref} className="card" {...rest}>
            {Icon && (
                <div className="card-brand">
                    <Icon className="card-icon" />
                </div>
            )}
            <div>
                {title && <h1 className="card-header">{title}</h1>}
                <p className="card-body">{children}</p>
            </div>
        </div>
    )
})

export default Card
