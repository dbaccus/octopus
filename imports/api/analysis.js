// Processes for finding investment opportunities,
// weeding out the misfits,
// researching and analyzing the survivors,
// picking the best candidates,
// and applying selling rules
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import axios from 'axios';

Meteor.methods({
  // Scanning the market to find investiment opportunities
  'analysis.searching'(){

  },
  // Test identified investiment opportunities to remove obvious misfits
  'analysis.prequalify'(symbol) {
    check(symbol, String);
    var pass = true;
    // Company and industy overview - find varibles that effect a business and/or industy

    // Market capitalization - defines total value

    // Valuation ratios - define how market participants view earnings growth prospects

    // Trading volume - the average number of shares traded daily
    // low trading spells trouble becuase possible price manipulation

    // Float - the number of outstanding shares not owned by insiders

    // Cash flow - the amount of cash from operations that flows in/out of a company's bank account

    // Historical sales and earnings growth - best prospects are firms with a long history sales and earnings growthDesc

    // Check the buzz - understand a company's main product in terms of relivance

    return pass;
  },
  // Detailed analysis based on the concentrate on the strongest (COSC) candidates approach

  // Analyzing Analysts' data - reviewing market analysts' buy/sell recommendations and earnings and revenue forecast
  // to determine the level of market enthusiasm

  // Valuation - determine the earnings growth implied by current stock price

  //
});
