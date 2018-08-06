import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import axios from 'axios';

import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));

  axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=demo')
    .then(response => console.log(response));
  // const alpha = require('alphavantage')({ key: 'qweqweqwe' });
  //
  // alpha.data.intraday('msft').then(financials => console.log(financials));
});
