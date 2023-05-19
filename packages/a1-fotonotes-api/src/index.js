class FotonotesClient {
  constructor() {
    this.fn = {
      a: 2
    };
  }

  getFotonotes() {  
    return this.fn;
  }
  
};

function getFotonotesClient() {
  
  const fotonotesClient = new FotonotesClient();

  return fotonotesClient;
}

module.exports = {
  getFotonotesClient,
};
