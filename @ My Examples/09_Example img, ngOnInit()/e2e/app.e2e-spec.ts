import { TestFolderPage } from './app.po';

describe('test-folder App', () => {
  let page: TestFolderPage;

  beforeEach(() => {
    page = new TestFolderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
