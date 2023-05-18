const { getBoxClient  } = require('../src/index');

describe('index.spec.js', () => {
 
  it('getBox from instance - success', async () => {
    const boxClient = getBoxClient();

    expect(boxClient.getBox()).toEqual({ a: 1 });
  });
});
