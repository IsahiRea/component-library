import React from "react"

export default function useEffectOnUpdate(effectFunction, deps) {
    // To avoid running the effect on the first render
    const firstRender = React.useRef(true)
    
    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            effectFunction()
        }
    }, [effectFunction, ...deps])
}