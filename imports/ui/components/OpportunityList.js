// This container is a list of the pre-qualified stocks/positions; The component is the parent for each stocks's analyst details
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Opportunities } from '../../api/opportunities.js';

import Opportunity from './Opportunity.js';

class OpportunityList extends Component {
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
  return {
    opportunities: Opportunities.find({}).fetch(),
  };
})(OpportunityList);
