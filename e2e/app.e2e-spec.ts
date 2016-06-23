import { PublicPagesPage } from './app.po';

describe('public-pages App', function() {
  let page: PublicPagesPage;

  beforeEach(() => {
    page = new PublicPagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
