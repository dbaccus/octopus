import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Opportunities } from '../../api/opportunities.js';

export default class Opportunity extends Component {
  labelFlowButton() {
  // Label flow button with the next state within the Kanban board
    var flowBtnLabel = 'Unknown';

    switch(this.props.opportunity.flowState) {
      case 'Backlog':
        flowBtnLabel = 'Select';
        break;
      case 'Selected':
        flowBtnLabel = 'Trade';
        break;
      case 'Trading':
        flowBtnLabel = 'Close';
        break;
      case 'Closed':
        flowBtnLabel = 'Result';
        break;
    };

    return flowBtnLabel;
  }

  toggleIgnore() {
    // Set the ignore property to the opposite of its current value
    Meteor.call('opportunities.setIgnore',
      this.props.opportunity._id,
      !this.props.opportunity.ignore);
  }

  showIgnore() {
    var currentFlowState = this.props.opportunity.flowState;

    if (currentFlowState === 'Backlog') {
      return (
        <div className="ignoreOption">
          <label id="ignoreLbl">Ignore:&nbsp;</label>
          <input
            id="ignoreCb"
            type="checkbox"
            readOnly
            checked={!!this.props.opportunity.ignore}
            onClick={this.toggleIgnore.bind(this)}
          />
        </div>
      );
    };
  }

  flowAction() {
    // Move opportunity to the next flow state
    // or display opportunity results
    var currentFlowState = this.props.opportunity.flowState;
    var nextFlowState = 'Unknown';

    if (currentFlowState !== 'Closed') {
      switch(currentFlowState) {
        case 'Backlog':
          nextFlowState = 'Selected';
          break;
        case 'Selected':
          nextFlowState = 'Trading';
          break;
        default:
          nextFlowState = 'Closed';
      };

      Opportunities.update(this.props.opportunity._id, {
        $set: { flowState: nextFlowState }
      });
    } else {
      console.log('do nothing');
    };
  }

  render() {
    // Give opportunity a different className when they are ignored
    // const opportunityClassName = this.props.opportunity.ignore ? true : false;

    return (
      <li className="media list-group-item opportunityCard">
        <div className="media-body">
          <p><label>Symbol:&nbsp;</label>{this.props.opportunity.symbol}</p>
          <p><label>Company:&nbsp;</label>{this.props.opportunity.company}</p>
          <p><label>Ask:&nbsp;</label>{this.props.opportunity.ask}</p>
        </div>
        <div className="media-body">
          <p><label>Screen Date:&nbsp;</label>{this.props.opportunity.screenDate.toDateString()}</p>
          <p><label>Category:&nbsp;</label>{this.props.opportunity.category}</p>
          <p><label>Score:&nbsp;</label>{this.props.opportunity.score}</p>
        </div>
        <div className="opportunityOptions">
          <button
            id="flowBtn"
            onClick={this.flowAction.bind(this)}>
            {this.labelFlowButton()}
          </button>
          {this.showIgnore()}
        </div>
      </li>
    );
  }
}
