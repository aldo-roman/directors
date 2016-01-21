'use strict';

describe('The detail view', function () {
  var page;

  beforeEach(function () {
    browser.get('/#/director');
    page = require('./detail.po');
  });

  it('should include the correct title', function() {
    expect(page.titleEl.getText()).toMatch('David Lynch');
  });

  it('should display director picture', function () {
    expect(page.imageEl.isPresent()).toBe(true);
    expect(page.imageEl.getAttribute('src')).toBe('http://www.interviewmagazine.com/files/2012/01/08/img-david-lynch-01-_184117216071.jpg');
  });

  it('should navigate to /directors page', function () {
    page.backButton.click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#/directors');
  });

});
