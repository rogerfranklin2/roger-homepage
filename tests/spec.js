describe('portfolio homepage', function() {
  it('should have a title', function() {
    browser.get('http://localhost:3000/');

    expect(browser.getTitle()).toEqual('Roger Franklin');
  });

  it('has a heading', function() {
    heading = browser.findElement(protractor.By.tagName('h1'));
    expect(heading.getText()).toEqual('Rogerfrankl.in');
  });

  it('should have default tab selected', function() {
    panel-content = browser.findElement(protractor.By.class('panel-content'));
    expect(panel-content.getText()).toEqual('Skills');
  });

  it('Should show differnt content when tab clicked', function () {

  });
});
