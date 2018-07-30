// // This container is a list of the pre-qualified stocks/positions; The component is the parent for each stocks's analyst details
// import React, { Component } from 'react';
// import { withTracker } from 'meteor/react-meteor-data';
//
// import { Finances } from '../../api/finances.js';
//
// import Finance from './Finance.js';
//
// class FinanceList extends Component {
//   renderFinances() {
//     return this.props.finances.map((finance) => (
//     <Finance key={finance.symbol} finance={finance} />
//     ));
//   }
//
//   render() {
//     return (
//       <ul className="media-list list-group">
//         {this.renderFinances()}
//       </ul>
//     );
//   }
// }
//
// export default withTracker(() => {
//   return {
//     finances: Finances.find({}).fetch(),
//   };
// })(FinanceList);
