describe('Example', () => {
  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it('found scrollview on home', async () => {
    await expect(element(by.id('scrollView'))).toBeVisible();
  });

  it('clicking on SDG13 should move to target screen', async () => {
    const scrollView = await element(by.id('scrollView'));
    await scrollView.scrollTo('bottom');
    const SDG13 = await element(by.id('12'));
    await SDG13.tap();
    await expect(element(by.id('targetScreen'))).toBeVisible();
  });

  it('clicking on back button should take to HOME screen', async () => {
    await element(by.text('Back')).tap();
    await expect(element(by.id('goalHeader'))).toBeVisible();
  });
});
