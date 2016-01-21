'use strict';

describe('The index view', function () {
  var page;

  beforeEach(function () {
    browser.get('/');
    page = require('./index.po');
  });

  it('should include the correct title', function() {
    expect(page.titleEl.getText()).toBe('List of Directors');
  });

  it('should list exactly 7 directors', function () {
    expect(page.directorsTable.$$('tbody tr').count()).toBe(7);
  });

  it('should list Alejandro Gonzáles Iñarritu correctly', function () {
    expect(page.firstDirector.$$('td').get(0).getText()).toMatch('Alejandro González Iñárritu');
    expect(page.firstDirector.$$('td').get(1).getText()).toMatch('Male');
    expect(page.firstDirector.$$('td').get(2).getText()).toMatch('Mexican');
    expect(page.firstDirector.$$('td').get(3).getText()).toMatch('Mexico DF');
    expect(page.firstDirector.$$('td').get(4).getText()).toMatch('15/Aug/1963');
    expect(page.firstDirector.$$('td').get(5).getText()).toMatch('52');
  });

  it('should list navigate to /director page', function () {
    page.firstDirector.$$('td').get(0).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#/director');
  });

});
