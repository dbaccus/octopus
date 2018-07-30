import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target')
  );

  const alpha = require('alphavantage')({ key: 'qweqweqwe' });

  alpha.data.intraday('msft').then(finances => console.log(finances));
});
