import React, { useState } from "react"

interface Prop{
    default: number;
}

const FunctionalComponent = (prop: Prop) =>{
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