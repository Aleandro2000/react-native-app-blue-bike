describe('BikesScreen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show a spinner while loading and then render bikes or "No bikes available"', async () => {
    await element(by.text('Bikes')).tap();

    await expect(element(by.type('Spinner'))).toBeVisible();

    await waitFor(element(by.type('Spinner')))
      .toBeNotVisible()
      .withTimeout(5000);

    const bikeCard = element(by.text('Gent-Dampoor-tStation'));
    const noBikesText = element(by.text('No bikes available'));

    await waitFor(bikeCard)
      .toBeVisible()
      .withTimeout(2000)
      .catch(async () => {
        await expect(noBikesText).toBeVisible();
      });
  });
});
