// This parent component is a container that displays a list of the pre-qualified stocks/positions.
import React, { Component } from 'react';
import axios from 'axios';
// import FINANCIALS from '../../api/financials.js';
import Financial from './Financial.js';

const FINANCIALS = [
  { open: '107.80', high: '108.05', low: '106.82', close: '108.04', volume: '9367' },
  { open: '105.40', high: '108.09', low: '104.84', close: '107.52', volume: '19987' },
  { open: '106.30', high: '106.44', low: '105.42', close: '106.28', volume: '4352' },
];

export default class FinancialsList extends Component {
  constructor(props) {
      super(props);

      this.state = { financials: {} };
  }

  componentWillMount() {
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo')
    .then(response => this.setState({ financials: response.data["Time Series (Daily)"] }));
  }

  renderFinancials() {
    return FINANCIALS.map(financial =>
    <Financial key={financial.open} financial={financial} />
    );
  }

  render() {
    // var t = new Date().getDate() + (6 - new Date().getDay() - 1) - 5 ;
    // var d = new Date();
    // d.setDate(t);
    // var lastFriday = d;
    // console.log(lastFriday);
    console.log(this.state.financials["2018-08-15"]);

    return (
      <ul className="media-list list-group">
        {this.renderFinancials()}
      </ul>
    );
  }
}
