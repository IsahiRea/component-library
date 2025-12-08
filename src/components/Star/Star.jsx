import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"

const Star = React.forwardRef(function Star({ starred, defaultStarred = false, onToggle, ...rest }, ref) {
    const isControlled = starred !== undefined
    const [internalStarred, setInternalStarred] = React.useState(defaultStarred)

    const isStarred = isControlled ? starred : internalStarred

    function handleToggle() {
        if (!isControlled) {
            setInternalStarred(prev => !prev)
        }
        onToggle?.(!isStarred)
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleToggle()
        }
    }

    return (
        <button
            ref={ref}
            type="button"
            className={`star-button ${isStarred ? 'starred' : ''}`}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            aria-pressed={isStarred}
            aria-label={isStarred ? "Unstar" : "Star"}
            {...rest}
        >
            {isStarred ? (
                <BsStarFill className="star filled" />
            ) : (
                <BsStar className="star" />
            )}
        </button>
    )
})

export default Star
