// This child component is a container that displays the financial situation of an organization
import React, { Component } from 'react';

export default class Financial extends Component {
  render() {
    return (
      <li className="media list-group-item">
        <div className="media-body">
          {this.props.financial.date}
        </div>
        <div className="media-body">
          {this.props.financial.open}
        </div>
        <div className="media-body">
          {this.props.financial.high}
        </div>
        <div className="media-body">
          {this.props.financial.low}
        </div>
        <div className="media-body">
          {this.props.financial.close}
        </div>
      </li>
    );
  }
}
