import React from "react"
import Button from "../Button/Button"
import { MenuContext } from "./Menu"

const MenuButton = React.forwardRef(function MenuButton({ children, ...rest }, ref) {
    const { open, toggleOpen } = React.useContext(MenuContext)

    return (
        <Button
            ref={ref}
            onClick={toggleOpen}
            aria-expanded={open}
            aria-haspopup="menu"
            {...rest}
        >
            {children}
        </Button>
    )
})

export default MenuButton
