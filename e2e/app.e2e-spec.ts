import { GmapPage } from './app.po';

describe('gmap App', function() {
  let page: GmapPage;

  beforeEach(() => {
    page = new GmapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
