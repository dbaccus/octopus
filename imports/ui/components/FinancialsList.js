// This parent component is a container that displays a list of the pre-qualified stocks/positions.
import React, { Component } from 'react';
import axios from 'axios';
// import FINANCIALS from '../../api/financials.js';
import Financial from './Financial.js';

const FINANCIALS = [
  { date: '2018-0-03', open: '107.80', high: '108.05', low: '106.82', close: '108.04' },
  { date: '2018-0-02', open: '105.40', high: '108.09', low: '104.84', close: '107.52' },
  { date: '2018-0-01', open: '106.30', high: '106.44', low: '105.42', close: '106.28' },
];

export default class FinancialsList extends Component {
  constructor(props) {
      super(props);

      this.state = { financials: [] };
  }

  componentWillMount() {
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=demo')
    .then(response => this.setState({ financials: response.data }));
  // const alpha = require('alphavantage')({ key: 'qweqweqwe' });
  //
  // alpha.data.intraday('msft').then(financials => console.log(financials));
  }

  renderFinancials() {
    return FINANCIALS.map(financial =>
    <Financial key={financial.date} financial={financial} />
    );
  }

  render() {
    console.log(this.state.financials);
    console.log(this.state.financials.length);
    return (
      <ul className="media-list list-group">
        {this.renderFinancials()}
      </ul>
    );
  }
}
