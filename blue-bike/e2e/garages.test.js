describe('GaragesScreen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show a spinner while loading and then render garages or "No garages available"', async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    await element(by.text('Garages')).tap();

    await expect(element(by.type('Spinner'))).toBeVisible();

    await waitFor(element(by.type('Spinner')))
      .toBeNotVisible()
      .withTimeout(5000);

    const garageCard = element(by.text('Getouw'));
    const noGaragesText = element(by.text('No garages available'));

    await waitFor(garageCard)
      .toBeVisible()
      .withTimeout(2000)
      .catch(async () => {
        await expect(noGaragesText).toBeVisible();
      });
  });
});
