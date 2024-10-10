import React, { useState } from "react"

const FunctionalComponent = (prop) =>{
    const [count, setCount] = useState(prop.default)

    function increase(){
        setCount(oldCount => oldCount+1)
    }
    return <>
        Count: {count}
        <button onClick={increase}>Increase Count</button>
    </>
}

export default FunctionalComponent