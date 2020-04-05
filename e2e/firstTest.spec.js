describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('found scrollview on home', async () => {
  await expect(element(by.id('scrollView'))).toBeVisible(); 
  });

  it('should have button 13', async () => {
    await waitFor(element(by.id('1')))
      .toBeVisible()
      .whileElement(by.id('12'))
      .scroll(100, 'down');
    //await element(by.id('12')).scrollTo('bottom');
    await expect(element(by.id('12')))
      .toBeVisible();
      
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('12')).tap();
    await expect(element(by.text('TARGETS'))).toBeVisible();
  });
});
