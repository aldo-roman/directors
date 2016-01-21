/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var DetailPage = function() {
  this.titleEl = element(by.css('h1'));
  this.imageEl = element(by.css('img'));
  this.backButton = element(by.css('a.md-button'));
};

module.exports = new DetailPage();
