class BoxClient {
  constructor() {
    this.box = {
      a: 1
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
