import { CpanelPage } from './app.po';

describe('cpanel App', () => {
  let page: CpanelPage;

  beforeEach(() => {
    page = new CpanelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
