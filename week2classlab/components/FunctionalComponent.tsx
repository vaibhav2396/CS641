import React, { useState } from "react"
import { View,Button } from "react-native";
import customStyle from "../styles/custom";

interface Prop{
    default: number;
    buttonTitle: string;
}

const FunctionalComponent = (prop: Prop) =>{
    const [count, setCount] = useState(prop.default)

    function increase(){
        setCount(oldCount => oldCount+1)
    }
    return <View style={customStyle.container} >
        Count: {count}
        <Button title={prop.buttonTitle} onPress={increase}/>
    </View>
}

export default FunctionalComponent