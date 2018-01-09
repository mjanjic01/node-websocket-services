export default class SocketService {
  constructor(subprotocol) {
    if ('WebSocket' in window) {
      this.socket = new WebSocket(`ws://${window.location.host}`, subprotocol);
    } else {
      throw new Error('The browser you are using does not support WebSocket technology.');
    }
  }


  send(frame) {
    this.socket.send(JSON.stringify(frame));
  }

  close() {
    this.socket.close();
  }

  onOpenEvent(callback) {
    this.socket.addEventListener('open', callback);
  }

  onMessageEvent(callback) {
    this.socket.addEventListener('message', callback);
  }

  onErrorEvent(callback) {
    this.socket.addEventListener('error', callback);
  }

  onCloseEvent(callback) {
    this.socket.addEventListener('close', callback);
  }
}
