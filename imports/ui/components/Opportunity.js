import React, { Component } from 'react';

export default class Opportunity extends Component {
  render() {
    return (
      <li className="media list-group-item">
        <div className="media-left">
          <h4 className="media-heading">
            {this.props.opportunity.company}
          </h4>
        </div>
        <div className="media-body">
          {this.props.opportunity.ticker}
        </div>
        <div className="media-body">
          {this.props.opportunity.ask}
        </div>
      </li>
    );
  }
}
