import React from "react"
import './Menu.css'

const MenuContext = React.createContext()
export { MenuContext }

const Menu = React.forwardRef(function Menu({ children, onOpen, ...rest }, ref) {
    const [open, setOpen] = React.useState(false)
    const menuRef = React.useRef(null)
    const menuItemsRef = React.useRef([])

    function toggleOpen() {
        const newOpen = !open
        setOpen(newOpen)
        onOpen?.(newOpen)
    }

    function closeMenu() {
        setOpen(false)
        onOpen?.(false)
    }

    function registerMenuItem(element) {
        if (element && !menuItemsRef.current.includes(element)) {
            menuItemsRef.current.push(element)
        }
    }

    function unregisterMenuItem(element) {
        menuItemsRef.current = menuItemsRef.current.filter(el => el !== element)
    }

    function focusMenuItem(index) {
        const items = menuItemsRef.current
        if (items.length === 0) return

        let targetIndex = index
        if (index < 0) targetIndex = items.length - 1
        if (index >= items.length) targetIndex = 0

        items[targetIndex]?.focus()
    }

    function handleKeyDown(e) {
        if (!open) return

        const items = menuItemsRef.current
        const currentIndex = items.indexOf(document.activeElement)

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault()
                focusMenuItem(currentIndex + 1)
                break
            case 'ArrowUp':
                e.preventDefault()
                focusMenuItem(currentIndex - 1)
                break
            case 'Escape':
                e.preventDefault()
                closeMenu()
                break
            case 'Home':
                e.preventDefault()
                focusMenuItem(0)
                break
            case 'End':
                e.preventDefault()
                focusMenuItem(items.length - 1)
                break
        }
    }

    React.useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false)
                onOpen?.(false)
            }
        }

        if (open) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [open, onOpen])

    return (
        <MenuContext.Provider value={{
            open,
            toggleOpen,
            closeMenu,
            registerMenuItem,
            unregisterMenuItem,
            menuItemsRef
        }}>
            <div
                ref={(node) => {
                    menuRef.current = node
                    if (typeof ref === 'function') ref(node)
                    else if (ref) ref.current = node
                }}
                className="menu"
                onKeyDown={handleKeyDown}
                {...rest}
            >
                {children}
            </div>
        </MenuContext.Provider>
    )
})

export default Menu
