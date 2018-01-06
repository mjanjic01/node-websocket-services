const WebSocket = require('ws');

const SUBPROTOCOLS = {
  drawing: require('./drawing')
};

module.exports = (server) => {

  const wss = new WebSocket.Server({
    server,
    handleProtocols(protocols) {
      const subprotocol = protocols[0];
      if (subprotocol && Object.keys(SUBPROTOCOLS).indexOf(subprotocol) !== -1) {
        return subprotocol;
      }

      return false;
    }
  });

  wss.on('connection', (ws) => {
    SUBPROTOCOLS[ws.protocol](ws);
  });

};
