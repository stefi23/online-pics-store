import React, {useState, useEffect,useRef} from 'react'

function useHover() {
    const [isHovered, setIsHoovered] = useState(false)
    const ref = useRef(null)

    const enter = () => {
        setIsHoovered(true)
    }

    const leave = () => {
        setIsHoovered(false)
    }

        useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)
        
        return () => {    
            ref.current.removeEventListener("mouseenter", enter)
            ref.current.removeEventListener("mouseleave", leave)
        }
    }, [])
    
    return [isHovered, ref]
}

export default useHover