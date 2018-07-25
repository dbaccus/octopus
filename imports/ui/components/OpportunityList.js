// This container is a list of the pre-qualified stocks/positions
// The component is the parent for each stocks's analyst details
import React from 'react';
import OpportunityDetail from './OpportunityDetail';

const OPPORTUNITIES = [
  { _id: '1', company: 'abc', ticker: 'cba', ask: '33.33', category: 'value', score: '9.9' },
  { _id: '2', company: 'def', ticker: 'fed', ask: '33.33', category: 'growth', score: '9.8' },
  { _id: '3', company: 'xyz', ticker: 'zyx', ask: '33.33', category: 'value', score: '9.7' }
];

const OpportunityList = () => {
  const RenderOpportunity = OPPORTUNITIES.map(opportunity =>
    <OpportunityDetail key={opportunity._id} opportunity={opportunity} />
  );

  return (
    <ul className="media-list list-group">
      {RenderOpportunity}
    </ul>
  );
};

export default OpportunityList;
