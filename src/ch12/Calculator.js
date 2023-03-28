import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";


// 끓는지 여부
function BoilingVerdict(props){
    if(props.celsius >=100){
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

// 섭씨로 값 변환
function toCelsius(fahrenheit){
    return ((fahrenheit-32)*5) / 9;
}
// 화씨로 값 변환
function toFahrenheit(celsius){
    return(celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert){
    // 온도를 실수값으로 변환
    const input = parseFloat(temperature);
    // input 값이 숫자가 아니라면 공백반환
    if(Number.isNaN(input)){
        return "";
    }
    // 그렇지 않으면 소수 첫번째 자리까지 올림하여 문자열 값으로 변환
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props){
    
    // 온도값
    const [temperature, setTemperature] = useState("");
    // 화씨 섭씨 변하는 상태값
    const [scale, setScale] = useState("c");

    // 섭씨로 변환
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }
    // 화씨로 변환
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return(
        <div>
            <TemperatureInput 
            scale ='c'
            temperature = {celsius}
            onTemperatureChange = {handleCelsiusChange}/>
            <TemperatureInput
            scale ='f'
            temperature = {fahrenheit}
            onTemperatureChange = {handleFahrenheitChange}/>
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    )

}

export default Calculator;