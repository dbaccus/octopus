import React, { Component } from 'react';

// import { ScorecardDefs } from '../../api/scorecards.js';

const ScorecardDefs = {
  sentimentIndex: { valueDesc: 'Add one point if the Sentiment Index (SI) score is minus 4 or below. Subtract one point if the SI score is greater than 2.', growthDesc: 'text' },
  earningsGrowth: { valueDesc: 'Subtract one point if the forecast year-over-year earnings growth exceeds 4%.', growthDesc: 'text' },
  earningsTrend: { valueDesc: 'Subtract one point if the EPS forecasts increased two cents or more during the last 90 days.', growthDesc: 'text' },
  impliedGrowth: { valueDesc: 'Add one point if the implied growth is less than 5%. Subtract one point if the implied growth exceeds 10%.', growthDesc: 'text' },
  currentTarget: { valueDesc: 'Add one point if the current price is below the low target buy price. Subtract one point if the current price exceeds the high target buy price.', growthDesc: 'text' },
  industryGrowth: { valueDesc: 'Add one point if the industry sales growth rate exceeds 15%. Subtract one point if the industry growth rate is less than 3%.', growthDesc: 'text' },
  industryCon: { valueDesc: 'Add one point if the industry has less than four major competitors.', growthDesc: 'text' },
  bizPlan: { valueDesc: 'Add one point if the current price is below the low target buy price. <br /> Subtract one point if the current price exceeds the high target buy price.', growthDesc: 'text' },
  execBoard: { valueDesc: 'Add one point if you rated the Key Executive & Board Quality very good or excellent.', growthDesc: 'text' },
  cleanAcct: { valueDesc: 'Subtract one point if the non-recurring charges percentahe of sales averaged 3% or more over the past five years, or if you judged the earnings growth stability as poor.', growthDesc: 'text' },
  financialHealth: { valueDesc: 'Financial health is a pass or fail test. Disqualify candidates that fail the appropriate test.', growthDesc: 'text' },
  expectedReturn: { valueDesc: 'Expected return on assets is the ROA that you expect the firm to acheve in iots recovery year. Add one point if the expected ROA exceeds 14%. Subtracted one point if the expected ROA is less than 6%.', growthDesc: 'text' },
  expendDeprec: { valueDesc: 'Subtract one point if recent annual deprecation charges generally exceeded capital expenditures in the same year.', growthDesc: 'text' },
  ownership: { valueDesc: 'Subtract one point if insider ownership exceeds 55% of shares outstanding.', growthDesc: 'text' },
  shareMoving: { valueDesc: 'Subtract one point if the share price is move than 10% above its 200-day moving average.', growthDesc: 'text' }
};

const type = 'Value';

export default class Scorecard extends Component {
  render() {
    return (
      <div>
        <h3>{type} Stock Analysis Scorecard</h3>

        <div>
          <h4>Step 1. Rating & Forecast</h4>
          <ul>
            <li>
              <div>
                <label>Sentiment Index</label>
                <p>{ScorecardDefs.sentimentIndex.valueDesc}</p>
              </div>
            </li>

            <li>
              <div>
                <label>Earnings Growth</label>
                <p>{ScorecardDefs.earningsGrowth.valueDesc}</p>
              </div>
            </li>

            <li>
              <div>
                <label>Earnings Forecast Trend</label>
                <p>{ScorecardDefs.earningsTrend.valueDesc}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 2. Valuation</h4>
          <ul>
            <li>
              <div>
                <label>Implied Growth</label>
                <p>{ScorecardDefs.impliedGrowth.valueDesc}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 3. Target Price</h4>
          <ul>
            <li>
              <div>
                <label>Current Price vs. Target Buy Price</label>
                <p>{ScorecardDefs.currentTarget.valueDesc}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 4. Industry Analysis</h4>
          <ul>
            <li>
              <div>
                <label>Industry Growth</label>
                <p>{ScorecardDefs.industryGrowth.valueDesc}</p>
              </div>
            </li>
            <li>
              <div>
                <label>Industry Concentration</label>
                <p>{ScorecardDefs.industryCon.valueDesc}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 5. Business Plan</h4>
          <ul>
            <li>
              <div>
                <label>Business Plan Score</label>
                <p>{ScorecardDefs.bizPlan.valueDesc}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 6. Management Quality</h4>
          <ul>
            <li>
              <div>
                <label>Key Executive & Board Quality</label>
                <p>{ScorecardDefs.execBoard.valueDesc}</p>
              </div>
            </li>
            <li>
              <div>
                <label>Clean Accounting/Earnings Growth Stability</label>
                <p>{ScorecardDefs.cleanAcct.valueDesc}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 7. Financial Health</h4>
          <ul>
            <li>
              <div>
                <label>Financial Health Score</label>
                <p>{ScorecardDefs.financialHealth.valueDesc}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 8. Profitability</h4>
          <ul>
            <li>
              <div>
                <label>Expected Return on Assets</label>
                <p>{ScorecardDefs.expectedReturn.valueDesc}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 9. Red Flags</h4>
          <ul>
            <li>
              <div>
                <label>Historical Capital Expenses vs. Depreciation</label>
                <p>{ScorecardDefs.expendDeprec.valueDesc}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 10. Ownership</h4>
          <ul>
            <li>
              <div>
                <label>Total Insider Ownership</label>
                <p>{ScorecardDefs.ownership.valueDesc}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 11. Price Chart</h4>
          <ul>
            <li>
              <div>
                <label>Share Price vs. Moving Average</label>
                <p>{ScorecardDefs.shareMoving.valueDesc}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <label>Total:</label>
          <p>####</p>
        </div>
      </div>
    );
  }
}
