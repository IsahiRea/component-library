import React from "react"
import { MenuContext } from "./Menu"

const MenuItem = React.forwardRef(function MenuItem({ children, onClick, ...rest }, ref) {
    const { closeMenu, registerMenuItem, unregisterMenuItem } = React.useContext(MenuContext)
    const itemRef = React.useRef(null)

    React.useEffect(() => {
        const element = itemRef.current
        registerMenuItem(element)
        return () => unregisterMenuItem(element)
    }, [registerMenuItem, unregisterMenuItem])

    function handleClick(e) {
        onClick?.(e)
        closeMenu()
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleClick(e)
        }
    }

    return (
        <div
            ref={(node) => {
                itemRef.current = node
                if (typeof ref === 'function') ref(node)
                else if (ref) ref.current = node
            }}
            className="menu-item"
            role="menuitem"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            {...rest}
        >
            {children}
        </div>
    )
})

export default MenuItem
