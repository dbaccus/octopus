import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Opportunities } from '../imports/api/opportunities.js';
//import { company, commerce, random } from 'faker';

// import '../imports/api/data.js';
import '../imports/api/analysis.js';
import '../imports/api/opportunities.js';
// import '../imports/api/finances.js';


Meteor.startup(() => {
  // code to run on server at startup

  // testing analysis script
  // var myTest = Meteor.call('analysis.prequalify', 'DSB');
  // var myTest = Meteor.call('data.test');
  // console.log(myTest);

  // Check to see if data exist in the collection
  // See if the collectio nhas any records
  // const numberRecords = Opportunities.find({}).count();
  //
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
