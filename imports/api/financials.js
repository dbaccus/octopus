// Methods for API call to return finanical data
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import axios from 'axios';

// export const FINANCIALS = [
//   { open: '107.80', high: '108.05', low: '106.82', close: '108.04', volume: '9367' },
//   { open: '105.40', high: '108.09', low: '104.84', close: '107.52', volume: '19987' },
//   { open: '106.30', high: '106.44', low: '105.42', close: '106.28', volume: '4352' },
// ];

Meteor.methods({
  'financials.test'() {
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo')
    .then(response => response.data["Time Series (Daily)"]);
  }
});
