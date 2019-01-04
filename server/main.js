import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Opportunities } from '../imports/api/opportunities.js';
//import { company, commerce, random } from 'faker';

import '../imports/api/analysis.js';
import '../imports/api/opportunities.js';
// import '../imports/api/financials.js';


Meteor.startup(() => {
  // code to run on server at startup

  // testing scripts
  // var myTest = Meteor.call('analysis.prequalify', 'DSB');
  // var myTest = Meteor.call('financials.test');
  // console.log(myTest);

  // Check to see if opportunities data exist
  // by counting records within the collection
  // const numberRecords = Opportunities.find({}).count();
  //
  // Create fake records if the collection needs more test data
  // if (numberRecords < 30) {
  //   _.times(5, () => {
  //     Meteor.call('opportunities.insert',
  //       company.companySuffix(),
  //       company.companyName(),
  //       commerce.price(),
  //       'Growth',
  //       random.number()
  //     );
  //   });
  // }
});
