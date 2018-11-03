import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Opportunities = new Mongo.Collection('opportunities');

if (Meteor.isServer) {
  Meteor.publish('opportunities', function opportunityPublication() {
    return Opportunities.find();
  });
}

Meteor.methods({
  'opportunities.insert'(symbol, company, ask, category, score) {
    check(symbol, String);
    check(company, String);
    check(ask, String);
    check(category, String);
    check(score, Number);

    Opportunities.insert({
      symbol,
      company,
      ask,
      screenDate: new Date(),
      category,
      score,
      ignore: false,
      flowState: 'Backlog'
    });
  },
  'opportunities.setIgnore'(opportunityId, setIgnore) {
    check(opportunityId, String);
    check(setIgnore, Boolean);

    Opportunities.update(opportunityId, { $set: { ignore: setIgnore } });
  },
  'opportunities.setFlow'(opportunityId, setFlow) {
    check(opportunityId, String);
    check(setFlow, String);

    Opportunities.update(opportunityId, { $set: { flow: setFlow } });
  }
});
