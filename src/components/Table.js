import React from 'react';

class Table extends React.PureComponent {
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

export default Table;
