import React, { Component } from 'react';

import OpportunityList from './components/OpportunityList.js';
import FinancialsList from './components/FinancialsList.js';

export default class App extends Component {
  // componentWillMount() {
  //   const alpha = require('alphavantage')({ key: 'qweqweqwe' });
  //
  //   alpha.data.intraday('msft').then(financials => console.log(financials));
  // }

  render () {
    return (
      <div className="container">
        <header>
          <h1>Octopus</h1>
        </header>

        <OpportunityList />
        <FinancialsList />
      </div>
    );
  }
}
