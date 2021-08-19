/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import '../App.css';

import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.onClick = this.onClick.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  onClick = (buttonName) => {
    this.setState((prevState) => calculate(prevState, buttonName));
  };

  render() {
    return (
      <div>
        <h1>My Calculator</h1>
        <table>
          <thead className="calculation">
            <tr>
              <td colSpan="4" className="screen">
                {`${this.state.total}`}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="gray_cell" type="button" onClick={() => this.onClick('AC')}>
                AC
              </td>
              <td className="gray_cell" type="button" onClick={() => this.onClick('+/-')}>
                +/-
              </td>
              <td className="gray_cell" type="button" onClick={() => this.onClick('%')}>
                %
              </td>
              <td className="orange_cell" type="button" onClick={() => this.onClick('÷')}>
                &#247;
              </td>
            </tr>
            <tr>
              <td className="gray_cell" type="button" onClick={() => this.onClick('7')}>
                7
              </td>
              <td className="gray_cell" type="button" onClick={() => this.onClick('8')}>
                8
              </td>
              <td className="gray_cell" type="button" onClick={() => this.onClick('9')}>
                9
              </td>
              <td className="orange_cell" type="button" onClick={() => this.onClick('×')}>
                &#10005;
              </td>
            </tr>
            <tr>
              <td className="gray_cell" type="button" onClick={() => this.onClick('4')}>
                4
              </td>
              <td className="gray_cell" type="button" onClick={() => this.onClick('5')}>
                5
              </td>
              <td className="gray_cell" type="button" onClick={() => this.onClick('6')}>
                6
              </td>
              <td className="orange_cell" type="button" onClick={() => this.onClick('-')}>
                -
              </td>
            </tr>
            <tr>
              <td className="gray_cell" type="button" onClick={() => this.onClick('1')}>
                1
              </td>
              <td className="gray_cell" type="button" onClick={() => this.onClick('2')}>
                2
              </td>
              <td className="gray_cell" type="button" onClick={() => this.onClick('3')}>
                3
              </td>
              <td className="orange_cell" type="button" onClick={() => this.onClick('+')}>
                +
              </td>
            </tr>
            <tr>
              <td className="gray_cell" colSpan="2" type="button" onClick={() => this.onClick('0')}>
                0
              </td>
              <td className="gray_cell" type="button" onClick={() => this.onClick('.')}>
                .
              </td>
              <td className="orange_cell" type="button" onClick={() => this.onClick('=')}>
                =
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
