import { AotDemoPage } from './app.po';

describe('aot-demo App', function() {
  let page: AotDemoPage;

  beforeEach(() => {
    page = new AotDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
