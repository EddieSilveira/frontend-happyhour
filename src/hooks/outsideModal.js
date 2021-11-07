import { useState, useEffect, useRef } from "react"

export const useOutsideModal = () => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    const handleClickOutside = (event) => {
        console.log(event.target)
        if(ref.current && !ref.current.contains(event.target)) {
            setVisible(false)
            console.log(ref)
        } 
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
        return () => {
            document.removeEventListener("click", handleClickOutside, true)
        }
    }, [ref])

    
    return { visible, setVisible, ref }
}