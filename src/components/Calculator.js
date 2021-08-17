/* eslint-disable max-classes-per-file */
import React from 'react';
import '../App.css';

// eslint-disable-next-line react/prefer-stateless-function
class Table extends React.Component {
  render() {
    return (
      <table>
        <thead className="calculation">
          <tr>
            <td />
            <td />
            <td />
            <td />
          </tr>
        </thead>
        <tr>
          <td className="gray_cell">AC</td>
          <td className="gray_cell">+/-</td>
          <td className="gray_cell">%</td>
          <td className="orange_cell">+</td>
        </tr>
        <tr>
          <td className="gray_cell">7</td>
          <td className="gray_cell">8</td>
          <td className="gray_cell">9</td>
          <td className="orange_cell">&#10005;</td>
        </tr>
        <tr>
          <td className="gray_cell">4</td>
          <td className="gray_cell">5</td>
          <td className="gray_cell">6</td>
          <td className="orange_cell">-</td>
        </tr>
        <tr>
          <td className="gray_cell">1</td>
          <td className="gray_cell">2</td>
          <td className="gray_cell">3</td>
          <td className="orange_cell">+</td>
        </tr>
        <tr>
          <td colSpan="2" className="gray_cell">0</td>
          <td className="gray_cell align">.</td>
          <td className="orange_cell">+</td>
        </tr>
      </table>
    );
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <h1>My Calculator</h1>
        <Table />
      </div>
    );
  }
}

export default Calculator;
