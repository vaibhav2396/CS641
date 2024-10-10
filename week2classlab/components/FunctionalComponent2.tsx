import React, { useState } from "react"

const FunctionalComponent2 = (prop) =>{
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