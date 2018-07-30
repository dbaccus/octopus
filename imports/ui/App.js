import React, { Component } from 'react';

import OpportunityList from './components/OpportunityList.js';
import FinanceList from './components/FinanceList.js';

export default class App extends Component {
  render () {
    return (
      <div className="container">
        <header>
          <h1>Octopus</h1>
        </header>

        <OpportunityList />
      </div>
    );
  }
}
