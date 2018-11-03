// This container is a list of the pre-qualified stocks/positions.
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Opportunities } from '../../api/opportunities.js';
import Opportunity from './Opportunity.js';

class Backlog extends Component {

  renderOpportunities() {
    return this.props.opportunities.map((opportunity) => (
    <Opportunity key={opportunity._id} opportunity={opportunity} />
    ));
  }

  render() {
    return (
      <ul className="media-list list-group">
        {this.renderOpportunities()}
      </ul>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('opportunities');

  return {
    opportunities: Opportunities.find({ flowState: 'Trading' }).fetch(),
  };
})(Backlog);
