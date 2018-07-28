import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.js';

// import googleFinance from 'google-finance';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));

  // googleFinance.historical({
  //   symbol: 'NASDAQ:AAPL',
  //   from: '2014-01-01',
  //   to: '2014-12-31'
  // }, quotes => {
  //   console.log(quotes)
  // });
});
