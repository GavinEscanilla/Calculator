const { useState } = React;
function App() {
    return (

        <div className="calculator">
            <Display />
            <Button />
        </div>
    );
}
function Display() {
    return (
        <div className="display" id="display">
            <div className="prerevious">0</div>
            <div className="current">0</div>
        </div>
    );
}
function Button() {

    return (
        <div className="button">
            <button id="clear">AC</button>
            <button id="divide">/</button>
            <button id="multiply">X</button>
            <button id="seven">7</button>
            <button id="eight">8</button>
            <button id="nine">9</button>
            <button id="subtract">-</button>
            <button id="four">4</button>    
            <button id="five">5</button>
            <button id="six">6</button>
            <button id="add">+</button>
            <button id="one">1</button>
            <button id="two">2</button>
            <button id="three">3</button>
            <button id="equals">=</button>
            <button id="zero">0</button>
            <button id="decimal">.</button>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"));