import React, { useState } from "react"

interface Prop{
    default: string;
}

const FunctionalComponent2 = (prop: Prop) =>{
    const [text, setText] = useState(prop.default)

    function changeText(){
        setText("Bye")
    }

    return <>
        {text}
        <button onClick={changeText}>Change Text</button>
    </>
}

export default FunctionalComponent2