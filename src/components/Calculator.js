import React from 'react';

import '../App.css';

import calculate from '../logic/calculate';

class Calculatorpage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick = (buttonName) => {
    this.setState((prevState) => calculate(prevState, buttonName));
  };

  result = () => {
    setInterval(
      () => { document.querySelector('.result').textContent = document.querySelector('.screen').textContent; },
      2,
    );
  };

  render() {
    function display(total, operation, next) {
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
    }

    return (
      <div>
        <h2>Let&lsquo;s do some math</h2>
        <h3 style={{ marginLeft: '5%', color: 'blue' }}> Your Result</h3>
        <div className="result" />
        <div className="table_container" style={{ backgroundColor: 'green' }}>
          <table>
            <thead className="calculation">
              <tr>
                <td colSpan="1" className="screen">
                  {
                  // eslint-disable-next-line react/destructuring-assignment
                  display(this.state.total, this.state.operation, this.state.next)
                  }
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="gray_cell" type="button">
                  <button type="submit" onClick={() => this.onClick('AC')} onKeyDown={() => this.onClick('AC')}>AC</button>
                </td>
                <td className="gray_cell" type="button">
                  <button type="submit" onClick={() => this.onClick('+/-')} onKeyDown={() => this.onClick('+/-')}>+/-</button>
                </td>
                <td className="gray_cell" type="button">
                  <button type="submit" onClick={() => this.onClick('%')} onKeyDown={() => this.onClick('%')}>%</button>
                </td>
                <td className="orange_cell" type="button">
                  <button className="orange_cell no_border" type="submit" onClick={() => this.onClick('÷')} onKeyDown={() => this.onClick('÷')}> &#247;</button>
                </td>
              </tr>
              <tr>
                <td className="gray_cell" type="button">
                  <button type="submit" onClick={() => this.onClick('7')} onKeyDown={() => this.onClick('7')}>7</button>
                </td>
                <td className="gray_cell" type="button">
                  <button type="submit" onClick={() => this.onClick('8')} onKeyDown={() => this.onClick('8')}>8</button>
                </td>
                <td className="gray_cell" type="button">
                  <button type="submit" onClick={() => this.onClick('9')} onKeyDown={() => this.onClick('9')}>9</button>
                </td>
                <td className="orange_cell" type="button">
                  <button className="orange_cell no_border" type="submit" onClick={() => this.onClick('x')} onKeyDown={() => this.onClick('x')}> &#10005;</button>
                </td>
              </tr>
              <tr>
                <td className="gray_cell" type="button">
                  <button type="submit" onClick={() => this.onClick('4')} onKeyDown={() => this.onClick('4')}>4</button>
                </td>
                <td className="gray_cell" type="button">
                  <button type="submit" onClick={() => this.onClick('5')} onKeyDown={() => this.onClick('5')}>5</button>
                </td>
                <td className="gray_cell" type="button">
                  <button type="submit" onClick={() => this.onClick('6')} onKeyDown={() => this.onClick('6')}>6</button>
                </td>
                <td className="orange_cell" type="button">
                  <button className="orange_cell no_border" type="submit" onClick={() => this.onClick('-')} onKeyDown={() => this.onClick('-')}> -</button>
                </td>
              </tr>
              <tr>
                <td className="gray_cell" type="button">
                  <button type="submit" onClick={() => this.onClick('1')} onKeyDown={() => this.onClick('1')}>1</button>
                </td>
                <td className="gray_cell" type="button">
                  <button type="submit" onClick={() => this.onClick('2')} onKeyDown={() => this.onClick('2')}>2</button>
                </td>
                <td className="gray_cell" type="button">
                  <button type="submit" onClick={() => this.onClick('3')} onKeyDown={() => this.onClick('3')}>3</button>
                </td>
                <td className="orange_cell" type="button">
                  <button className="orange_cell no_border" type="submit" onClick={() => this.onClick('+')} onKeyDown={() => this.onClick('+')}> +</button>
                </td>
              </tr>
              <tr>
                <td className="gray_cell" type="button" colSpan="2">
                  <button type="submit" onClick={() => this.onClick('0')} onKeyDown={() => this.onClick('0')}>0</button>
                </td>
                <td className="gray_cell" type="button">
                  <button type="submit" onClick={() => this.onClick('.')} onKeyDown={() => this.onClick('.')}>.</button>
                </td>
                <td className="orange_cell" type="button">
                  <button className="orange_cell no_border" type="submit" onClick={() => { this.onClick('='); this.result(); }} onKeyDown={() => this.onClick('=')}> =</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Calculatorpage;
