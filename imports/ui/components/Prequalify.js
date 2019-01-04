// This component searches a stock then
// does a prequalify check to determine
// if the stock is likely to be a good opportunity
import React, { Component } from 'react';

const PROFILE = {
  overview: true,
  capitalization: {large: 'x', mid: 'x', small: 'small', micro: 'micro'},
  valuation: {pe: 20, ps: 30},
  volume: 100,
  float: 200,
  cashFlow: 300,
  historicalEarnings: {sales: 40, growth: 50},
  buzz: true
};

const FINANCIALS = {
  overview: 'this company is doing... blah, blah, blah. the industry is doing jah, jah, jah',
  capitalization: 'large',
  valuation: {pe: 200, ps: 300},
  volume: 100,
  float: 200,
  cashFlow: 300,
  historicalEarnings: {sales: 40, growth: 50},
  buzz: 'this company is hot... must buy now:-)',
};

const PASS = '../images/hd_ehr-150.png';
const FAIL = '../images/hd_it-150.png';

var score = 0;

export default class Prequalify extends Component {
  renderOverview () {
    if (PROFILE.overview) {
      return (
        <div>
          <label>Compnay & industral overview:</label>
          <p>{FINANCIALS.overview}</p></div>
      )
    };
  }

  renderCapMatch () {
    var proLrgCap = PROFILE.capitalization.large;
    var proMidCap = PROFILE.capitalization.mid;
    var proSmCap = PROFILE.capitalization.small;
    var proMicCap = PROFILE.capitalization.micro;

    var match = false;
    var matchPath = FAIL;

    switch (FINANCIALS.capitalization) {
      case proLrgCap:
        match = true;
        break;
      case proMidCap:
        match = true;
        break;
      case proSmCap:
        match = true;
        break;
      case proMidCap:
        match = true;
        break;
      default:
        match = false;
    }

    if (match) {
      matchPath = PASS;
      score++;
    } else {
      matchPath = FAIL;
    }
    console.log('score @ capitalization:'+score.toString());
    return matchPath;
  }

  renderValMatch () {
    var matchPaths = [FAIL,FAIL];

    if(FINANCIALS.valuation.pe === PROFILE.valuation.pe){
      matchPaths[0] = PASS;
      score++;
    }

    if(FINANCIALS.valuation.ps !== PROFILE.valuation.ps){
      matchPaths[1] = PASS;
      score++;
    }
    console.log('score @ valuation:'+score.toString());
    return matchPaths;
  }

  renderVolMatch () {
    var matchPath = FAIL;

    if(FINANCIALS.volume === PROFILE.volume){
        matchPath = PASS;
        score++;
    }
    console.log('score @ volume:'+score.toString());
    return matchPath;
  }

  renderFloatMatch () {
    var matchPath = FAIL;

    if(FINANCIALS.float === PROFILE.float) {
      matchPath = PASS;
      score++;
    }
    console.log('score @ float:'+score.toString());
    return matchPath;
  }

  renderHistMatch () {
    var matchPaths = [FAIL,FAIL];

    if(FINANCIALS.historicalEarnings.sales === PROFILE.historicalEarnings.sales){
      matchPaths[0] = PASS;
      score++;
    }

    if(FINANCIALS.historicalEarnings.growth === PROFILE.historicalEarnings.growth){
      matchPaths[1] = PASS;
      score++;
    }
    console.log('score @ historicalEarnings:'+score.toString());
    return matchPaths;
  }

  renderBuzz () {
    if (PROFILE.buzz) {
      return (
        <div>
          <label>The buzz:</label>
          <p>{FINANCIALS.buzz}</p></div>
      )
    };
  }

  renderMatch () {
    var matchPath = FAIL
    var matchPerct = 5/6;
    var calcPerct = score/6;

    if (matchPerct === calcPerct) {
      matchPath = PASS;
    }

    return matchPath;
  }

  render () {
    var valMatch = this.renderValMatch();
    var histMatch = this.renderHistMatch();

    return (
      <div>
        <div><h3>Prequalify</h3></div>

        {this.renderOverview()}

        <div>
          <label>Market capitalization:</label>
          <p>{FINANCIALS.capitalization} <img src={this.renderCapMatch()}/></p></div>

        <div>
          <label>Valuation ratios:</label>
          <ul>
            <li><label>P/E</label> >= {FINANCIALS.valuation.pe} <img src={valMatch[0]}/></li>
            <li><label>P/S</label> >= {FINANCIALS.valuation.ps} <img src={valMatch[1]}/></li></ul></div>

        <div>
          <label>Trading Volume:</label>
          <p>{FINANCIALS.volume} <img src={this.renderVolMatch()}/></p></div>

        <div>
          <label>Float:</label>
          <p>{FINANCIALS.float} (in million shares) <img src={this.renderFloatMatch()}/></p></div>

        <div>
          <label>Historical sales & earning growth:</label>
          <ul>
            <li><label>Sales</label> {FINANCIALS.historicalEarnings.sales} <img src={histMatch[0]}/></li>
            <li><label>Growth</label> {FINANCIALS.historicalEarnings.growth} <img src={histMatch[1]}/></li></ul></div>

        {this.renderBuzz()}

        <div>
          <label>Match:</label> <img src={this.renderMatch()}/></div>

      </div>
    );
  }
}
