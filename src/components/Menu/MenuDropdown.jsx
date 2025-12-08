import React from "react"
import { MenuContext } from "./Menu"

const MenuDropdown = React.forwardRef(function MenuDropdown({ children, ...rest }, ref) {
    const { open } = React.useContext(MenuContext)

    if (!open) return null

    return (
        <div
            ref={ref}
            className="menu-dropdown"
            role="menu"
            {...rest}
        >
            {children}
        </div>
    )
})

export default MenuDropdown
