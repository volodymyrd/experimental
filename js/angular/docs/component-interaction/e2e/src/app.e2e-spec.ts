import {AppPage} from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // Pass data from parent to child with input binding
  const _heroNames = ['Dr IQ', 'Magneta', 'Bombasto'];
  const _masterName = 'Master';

  it('should pass properties to children properly', () => {
    page.navigateTo();

    const parent = element.all(by.tagName('app-hero-parent')).get(0);
    const heroes = parent.all(by.tagName('app-hero-child'));

    for (let i = 0; i < _heroNames.length; i++) {
      const childTitle = heroes.get(i).element(by.tagName('h3')).getText();
      const childDetail = heroes.get(i).element(by.tagName('p')).getText();
      expect(childTitle).toEqual(_heroNames[i] + ' says:');
      expect(childDetail).toContain(_masterName);
    }
  });

  // Intercept input property changes with a setter
  it('should display trimmed, non-empty names', function() {
    let _nonEmptyNameIndex = 0;
    let _nonEmptyName = '"Dr IQ"';
    let parent = element.all(by.tagName('app-name-parent')).get(0);
    let hero = parent.all(by.tagName('app-name-child')).get(_nonEmptyNameIndex);

    let displayName = hero.element(by.tagName('h3')).getText();
    expect(displayName).toEqual(_nonEmptyName);
  });

  it('should replace empty name with default name', function() {
    let _emptyNameIndex = 1;
    let _defaultName = '"<no name set>"';
    let parent = element.all(by.tagName('app-name-parent')).get(0);
    let hero = parent.all(by.tagName('app-name-child')).get(_emptyNameIndex);

    let displayName = hero.element(by.tagName('h3')).getText();
    expect(displayName).toEqual(_defaultName);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
