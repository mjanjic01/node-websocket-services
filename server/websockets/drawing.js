const WebSocket = require('ws');

const clients = [];

module.exports = (ws) => {
  clients.push(ws);

  ws.on('message', (message) => {
    clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('error', () => clients.splice(clients.indexOf(ws), 1));
};
