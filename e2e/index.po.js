/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var IndexPage = function() {
  this.directorsTable = element(by.css('table.directors'));
  this.firstDirector = this.directorsTable.$$('tbody tr').get(0);
  this.titleEl = element(by.css('h1'));
};

module.exports = new IndexPage();
