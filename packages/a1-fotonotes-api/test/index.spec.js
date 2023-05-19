const { getFotonotesClient  } = require('../src/index');

describe('index.spec.js', () => {
 
  it('getFotonotesClient from instance - success', async () => {
    
    const fotonotesClient = getFotonotesClient();

    expect(fotonotesClient.getFotonotes()).toEqual({ a: 2 });
  });
});
