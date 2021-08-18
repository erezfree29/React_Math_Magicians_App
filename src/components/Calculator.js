import React from 'react';

import Table from './Table';

import '../App.css';

class Calculator extends React.PureComponent {
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
