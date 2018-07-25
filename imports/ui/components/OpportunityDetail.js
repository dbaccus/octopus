import React from 'react';

const OpportunityDetail = (props) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <h4 className="media-heading">
          {props.opportunity.company}
        </h4>
      </div>
      <div className="media-body">
        {props.opportunity.ticker}
      </div>
      <div className="media-body">
        {props.opportunity.ask}
      </div>
    </li>
  );
};

export default OpportunityDetail;
