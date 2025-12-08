import React from "react"

export default function useEffectOnUpdate(effectFunction, deps) {
    const firstRender = React.useRef(true)
    const effectRef = React.useRef(effectFunction)

    React.useEffect(() => {
        effectRef.current = effectFunction
    })

    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        return effectRef.current()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
}
