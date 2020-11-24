// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Modified by Jan van Unnik (http://jan.marketing)
// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a sponsorurl ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: 
			{ urlMatches: 'bol.com|thuisbezorgd.nl|dinnersite.nl|wehkamp.nl|fiverr.com|hema.nl|zalando.nl|booking.com|cheaptickets.nl|vd.nl|adidas.nl|bartsmit.nl|blokker.nl|ca.nl|expedia.nl|hunkemoller.nl|vodafone.nl|bonprix.nl|redcoon.nl|conrad.nl|lightinthebox.com|neckerman.com|kpn.nl|hi.nl|paradigit.nl|phonehouse.nl|simyo.nl|hetrsg.nl|wehkamp.nl|honkemoller.nl|honkemoller.com'}
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});
