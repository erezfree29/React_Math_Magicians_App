import React from 'react';

import Table from './table';

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

export default { Calculator };
