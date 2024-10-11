import React, { useState } from "react"
import { Button } from "react-native";

interface Prop{
    default: number;
    buttonTitle: string;
}

const FunctionalComponent = (prop: Prop) =>{
    const [count, setCount] = useState(prop.default)

    function increase(){
        setCount(oldCount => oldCount+1)
    }
    return <>
        Count: {count}
        <Button title={prop.buttonTitle} onPress={increase}/>
    </>
}

export default FunctionalComponent