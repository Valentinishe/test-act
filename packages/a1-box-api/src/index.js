class BoxClient {
  constructor() {
    this.box = {};
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
