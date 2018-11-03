// Methods for API call to return finanical data
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import axios from 'axios';

Meteor.methods({
  'data.test'() {
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo')
    .then(response => response.data["Time Series (Daily)"]);
  }
});
