import React, { useState } from "react"
import { Button } from "react-native";

interface Prop{
    default: string;
    buttonTitle: string;
}

const FunctionalComponent2 = (prop: Prop) =>{
    const [text, setText] = useState(prop.default)

    function changeText(){
        const newText = text == "Hello" ? "Bye" : "Hello"
        setText(newText)
    }

    return <>
        {text}
        <Button title = {prop.buttonTitle} onPress={changeText} />
    </>
}

export default FunctionalComponent2