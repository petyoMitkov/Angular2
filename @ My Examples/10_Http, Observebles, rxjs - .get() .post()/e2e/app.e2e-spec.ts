import { RxJsHttpObservablesPage } from './app.po';

describe('rx-js-http-observables App', () => {
  let page: RxJsHttpObservablesPage;

  beforeEach(() => {
    page = new RxJsHttpObservablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
