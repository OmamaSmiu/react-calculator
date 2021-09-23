import React, { useState } from 'react';
import './calculator.css'

function Calculator() {
    const [result, setResult] = useState("")


    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const calculate = () => {
        setResult(eval(result).toString())
    }

    const clearAll = () => {
        setResult("")
    }


    return (
        <div className="Mian">
            <h1>React Calculator</h1>
            <input type="text" className="input" placeholder="0" value={result} />
            <button name="9" className="button" onClick={handleClick}>9</button>
            <button name="8" className="button" onClick={handleClick}>8</button>
            <button name="7" className="button" onClick={handleClick}>7</button>
            <button name="6" className="button" onClick={handleClick}>6</button>
            <button name="5" className="button" onClick={handleClick}>5</button>
            <button name="4" className="button" onClick={handleClick}>4</button>
            <button name="3" className="button" onClick={handleClick}>3</button>
            <button name="2" className="button" onClick={handleClick}>2</button>
            <button name="1" className="button" onClick={handleClick}>1</button>
            <button name="+" className="button" onClick={handleClick}>+</button>
            <button name="*" className="button" onClick={handleClick}>*</button>
            <button name="-" className="button" onClick={handleClick}>-</button>
            <button name="/" className="button" onClick={handleClick}>/</button>
            <button name="=" className="button" onClick={calculate}>=</button>
            <button name="AC" className="button" onClick={clearAll}>AC</button>
        </div>
    )
}

export default Calculator