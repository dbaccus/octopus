// This component display the active user's profile
import React, { Component } from 'react';

export default class Profile extends Component {
  render () {
    return (
      <div>
        <div><h3>Profile</h3></div>

        <div>
          <div>
            image<input type="button" value="Upload" /></div>

          <div>
            <input type="textbox" placeholder="first name"/></div>

          <div>
            <input type="textbox" placeholder="last name"/></div>

          <div>
            <input type="textbox" placeholder="email"/></div>

          <div>
            <input type="textbox" placeholder="password" /></div></div>

        <div>
          <div>
            <label>Company & industry overview:</label>
            <input type="checkbox" checked="true" /></div>

          <div>
            <label>Market capitalization:</label><br/>
            <input type="checkbox" checked="true" /><font>Large-cap</font>
            <input type="checkbox" checked="true" /><font>Mid-cap</font>
            <input type="checkbox" checked="true" /><font>Small-cap</font>
            <input type="checkbox" checked="false" /><font>Micro-cap</font></div>

          <div>
            <label>Valuation ratios:</label>
            <ul>
              <li>P/E <input type="textbox" placeholder=">=" /></li>
              <li>P/S <input type="textbox" placeholder=">=" /></li></ul></div>

          <div>
            <label>Float:</label>
            <input type="textbox" placeholder=">=" /></div>

          <div>
            <label>Cash flow:</label>
            <input type="textbox" placeholder=">=" /></div>

          <div>
            <label>Historical sales & earning growth:</label>
            <ul>
              <li>Sales <input type="textbox" placeholder=">=" /></li>
              <li>Growth <input type="textbox" placeholder=">=" /></li></ul></div>

          <div>
            <label>The buzz:</label>
            <input type="checkbox" checked="true" /></div></div>

      </div>
    );
  }
}
