import React, { useContext, useState } from 'react'

const SliderContext = React.createContext()
const SliderUpdateContext = React.createContext()

export function useSlider() {
    return useContext(SliderContext)
}

export function useSliderUpdate() {
    return useContext(SliderUpdateContext)
}

export function SliderProvider({ children }) {

    const [index, setIndex] = useState(0)

    const handleArrow = (direction) => {

        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 4)
        }
        if (direction === "r") {
            setIndex(index !== 4 ? index + 1 : 0)
        }
        if (direction === "1") {
            setIndex(index !== 0 ?  0 : index)
        }
        if (direction === "2") {
            setIndex(index !== 1 ?  1 : index)
        }
        if (direction === "3") {
            setIndex(index !== 2 ?  2 : index)
        }
        if (direction === "4") {
            setIndex(index !== 3 ? 3 : index)
        }
        if (direction === "5") {
            setIndex(index !== 4 ?  4 : index)
        }
    }

    return (
        <SliderContext.Provider value={index}>
            <SliderUpdateContext.Provider value={handleArrow}>
                {children}
            </SliderUpdateContext.Provider>
        </SliderContext.Provider>

    )

}
