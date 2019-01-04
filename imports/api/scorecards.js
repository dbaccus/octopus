export const ScorecardDefs = {
  sentimentIndex: { valueDesc: 'Add one point if the Sentiment Index (SI) score is minus 4 or below. Subtract one point if the SI score is greater than 2.', growthDesc: 'text' },
  earningsGrowth: { valueDesc: 'Subtract one point if the forecast year-over-year earnings growth exceeds 4%.', growthDesc: 'text' },
  earningsTrend: { valueDesc: 'Subtract one point if the EPS forecasts increased two cents or more during the last 90 days.', growthDesc: 'text' },
  impliedGrowth: { valueDesc: 'Add one point if the implied growth is less than 5%. Subtract one point if the implied growth exceeds 10%.', growthDesc: 'text' },
  currentTarget: { valueDesc: 'Add one point if the current price is below the low target buy price. Subtract one point if the current price exceeds the high target buy price.', growthDesc: 'text' },
  industryGrowth: { valueDesc: 'Add one point if the industry sales growth rate exceeds 15%. Subtract one point if the industry growth rate is less than 3%.', growthDesc: 'text' },
  industryCon: { valueDesc: 'Add one point if the industry has less than four major competitors.', growthDesc: 'text' },
  bizPlan: { valueDesc: 'Add one point if the current price is below the low target buy price. Subtract one point if the current price exceeds the high target buy price.', growthDesc: 'text' },
  execBoard: { valueDesc: 'Add one point if you rated the Key Executive & Board Quality very good or excellent.', growthDesc: 'text' },
  cleanAcct: { valueDesc: 'Subtract one point if the non-recurring charges percentahe of sales averaged 3% or more over the past five years, or if you judged the earnings growth stability as poor.', growthDesc: 'text' },
  financialHealth: { valueDesc: 'Financial health is a pass or fail test. Disqualify candidates that fail the appropriate test.', growthDesc: 'text' },
  expectedReturn: { valueDesc: 'Expected return on assets is the ROA that you expect the firm to acheve in iots recovery year. Add one point if the expected ROA exceeds 14%. Subtracted one point if the expected ROA is less than 6%.', growthDesc: 'text' },
  expendDeprec: { valueDesc: 'Subtract one point if recent annual deprecation charges generally exceeded capital expenditures in the same year.', growthDesc: 'text' },
  ownership: { valueDesc: 'Subtract one point if insider ownership exceeds 55% of shares outstanding.', growthDesc: 'text' },
  shareMoving: { valueDesc: 'Subtract one point if the share price is move than 10% above its 200-day moving average.', growthDesc: 'text' }
};
