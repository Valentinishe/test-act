class BoxClient {
  constructor() {
    this.box = {
      a: 2
    };
  }

  getBox() {  
    return this.box;
  }
};

function getBoxClient() {
  const boxClient = new BoxClient();

  return boxClient;
}

module.exports = {
  getBoxClient: getBoxClient,
};
