import React, { Component } from 'react';

// import OpportunityList from './components/OpportunityList.js';
import Backlog from './components/Backlog.js';
import Selected from './components/Selected.js';
import Trading from './components/Trading.js';
import Closed from './components/Closed.js';

// const FlowStates = [
//   {_id: 1, flowState: 'Backlog'},
//   {_id: 2, flowState: 'Selected'},
//   {_id: 3, flowState: 'Trading'},
//   {_id: 4, flowState: 'Closed'}
// ];

export default class App extends Component {
  // renderFlowStates() {
  //   return FlowStates.map((opportunityList) => <OpportunityList key={opportunityList._id} opportunityList={opportunityList}/>
  //   )
  // }

  render () {
    return (
      <div className="container">
        <header>
          <h1>Octopus</h1>
        </header>

        <div className="kanbanBoard">
          <div className="flowColumn">
            <h4>Backlog</h4>
            <Backlog />
          </div>
          <div className="flowColumn">
            <h4>Selected</h4>
            <Selected />
          </div>
          <div className="flowColumn">
            <h4>Trading</h4>
            <Trading />
          </div>
          <div className="flowColumn">
            <h4>Closed</h4>
            <Closed />
          </div>
        </div>
      </div>
    );
  }
}
