import { PepiAppPage } from './app.po';

describe('pepi-app App', () => {
  let page: PepiAppPage;

  beforeEach(() => {
    page = new PepiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
