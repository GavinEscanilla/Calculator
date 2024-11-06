const { useState } = React;
function App() {
    const [displayValue, setDisplayValue] = useState("");
    const [previousValue, setPreviousValue] = useState("");
    function handleClick(value) {
        if(value === '=') {
            try{
            let cleanvalue = displayValue.replace(/x/gi, '*');
            cleanvalue = cleanvalue.replace(/([+*/])\s*([+*/])+/g, '$2');
            cleanvalue = cleanvalue.replace(/[^0-9+\-*/.]/g, '');
            const res = eval(cleanvalue);
            setDisplayValue(res.toString());
            const formattedres = Number.isInteger(res) ? res.toString() : parseFloat(res.toFixed(4)).toString();
            setPreviousValue(formattedres);
        }catch(e){
            setDisplayValue("Error");
        }
    }else if(value === 'AC'){
        setDisplayValue("");
    }else if(value === '.'){
        const parts = displayValue.split(/[\+\-\*\/]/);
            const lastpart = parts[parts.length - 1];
            if(!lastpart.includes('.')){
                setDisplayValue(displayValue + value);
            }
    }else if (value === '0') {
        if (displayValue !== '0') {
            setDisplayValue(displayValue + value);
        }

    } else if (['+', '*', '/'].includes(value)) {
            const lastChar = displayValue.slice(-1);
            if (lastChar === '-') {
                if (displayValue.length > 1 && ['+', '*', '/'].includes(displayValue.slice(-2, -1))) {
                    setDisplayValue(displayValue.slice(0, -2) + value);
                } else {
                    setDisplayValue(displayValue.slice(0, -1) + value);
                }
            } else if (['+', '*', '/'].includes(lastChar)) {
        
                setDisplayValue(displayValue.slice(0, -1) + value);
            } else {
                setDisplayValue(displayValue + value);
            }
        } else if (value === '-') {
            const lastChar = displayValue.slice(-1);
            if (lastChar === '-') {
                return;
            }
            setDisplayValue(displayValue + value);
        } else {
            setDisplayValue(displayValue + value);
        }
    }
    return (

        <div className="calculator">
            <Display displayValue={displayValue} />
            <Button handleClick={handleClick} />
        </div>
    );
    
}

function Display({ displayValue }) {


    return (
        <div className="display" id="display">
            <div className="previous"></div>
            <div className="current">{displayValue || "0" }</div>
        </div>
    );
}
function Button({handleClick}) {

    return (
        <div className="button">
            <button id="clear" onClick={() => handleClick("AC")}>AC</button>
      <button id="divide" onClick={() => handleClick("/")}>/</button>
      <button id="multiply" onClick={() => handleClick("*")}>X</button>
      <button id="seven" onClick={() => handleClick("7")}>7</button>
      <button id="eight" onClick={() => handleClick("8")}>8</button>
      <button id="nine" onClick={() => handleClick("9")}>9</button>
      <button id="subtract" onClick={() => handleClick("-")}>-</button>
      <button id="four" onClick={() => handleClick("4")}>4</button>
      <button id="five" onClick={() => handleClick("5")}>5</button>
      <button id="six" onClick={() => handleClick("6")}>6</button>
      <button id="add" onClick={() => handleClick("+")}>+</button>
      <button id="one" onClick={() => handleClick("1")}>1</button>
      <button id="two" onClick={() => handleClick("2")}>2</button>
      <button id="three" onClick={() => handleClick("3")}>3</button>
      <button id="equals" onClick={() => handleClick("=")}>=</button>
      <button id="zero" onClick={() => handleClick("0")}>0</button>
      <button id="decimal" onClick={() => handleClick(".")}>.</button>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"));