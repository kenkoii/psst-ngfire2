import { PsstPage } from './app.po';

describe('psst App', function() {
  let page: PsstPage;

  beforeEach(() => {
    page = new PsstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
