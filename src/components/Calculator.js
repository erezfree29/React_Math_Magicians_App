import useState from 'react-hook-use-state';

import '../App.css';

import calculate from '../logic/calculate';

function Calculator() {
  const [myState, setMyState] = useState({ total: null, operation: null, next: null });
  const display = (total, operation, next) => { // the curly brace opens a multiline function
    if (next !== null && operation === null) {
      return next;
    }
    if (operation !== null && next !== null) {
      return next;
    }

    if (operation) {
      return operation;
    }
    if (total) {
      return total;
    }
    return false;
  };

  return (
    <div className="center">
      <div>
        <h1>My Calculator</h1>
        <table>
          <thead className="calculation">
            <tr>
              <td colSpan="4" className="screen">
                <div className="align">
                  {
                  display(myState.total, myState.operation, myState.next)
                  }
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="gray_cell" type="button">
                <button type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, 'AC') }))}>AC</button>
              </td>
              <td className="gray_cell" type="button">
                <button type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '+/-') }))}>+/-</button>
              </td>
              <td className="gray_cell" type="button">
                <button type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '%') }))}>%</button>
              </td>
              <td className="orange_cell" type="button">
                <button className="orange_cell no_border" type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '÷') }))}>÷</button>
              </td>
            </tr>
            <tr>
              <td className="gray_cell" type="button">
                <button type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '7') }))}>7</button>
              </td>
              <td className="gray_cell" type="button">
                <button type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '8') }))}>8</button>
              </td>
              <td className="gray_cell" type="button">
                <button type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '9') }))}>9</button>
              </td>
              <td className="orange_cell" type="button">
                <button className="orange_cell no_border" type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, 'x') }))}>x</button>
              </td>
            </tr>
            <tr>
              <td className="gray_cell" type="button">
                <button type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '4') }))}>4</button>
              </td>
              <td className="gray_cell" type="button">
                <button type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '5') }))}>5</button>
              </td>
              <td className="gray_cell" type="button">
                <button type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '6') }))}>6</button>
              </td>
              <td className="orange_cell" type="button">
                <button className="orange_cell no_border" type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '-') }))}>-</button>
              </td>
            </tr>
            <tr>
              <td className="gray_cell" type="button">
                <button type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '1') }))}>1</button>
              </td>
              <td className="gray_cell" type="button">
                <button type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '2') }))}>2</button>
              </td>
              <td className="gray_cell" type="button">
                <button type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '3') }))}>3</button>
              </td>
              <td className="orange_cell" type="button">
                <button className="orange_cell no_border" type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '+') }))}>+</button>
              </td>
            </tr>
            <tr>
              <td className="gray_cell" type="button" colSpan="2">
                <button type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '0') }))}>0</button>
              </td>
              <td className="gray_cell" type="button">
                <button type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '.') }))}>.</button>
              </td>
              <td className="orange_cell" type="button">
                <button className="orange_cell no_border" type="submit" onClick={() => setMyState((myState) => ({ ...myState, ...calculate(myState, '=') }))}>=</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calculator;
