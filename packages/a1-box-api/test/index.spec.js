const { getBoxClient  } = require('../src/index');

describe('index.spec.js', () => {
 
  it('getBox - success', async () => {
    const boxClient = getBoxClient();

    expect(boxClient.getBox()).toEqual({});
  });
});
