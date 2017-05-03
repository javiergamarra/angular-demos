import { AdvancedAngularPage } from './app.po';

describe('advanced-angular App', () => {
  let page: AdvancedAngularPage;

  beforeEach(() => {
    page = new AdvancedAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
