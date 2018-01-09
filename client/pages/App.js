import React, { Component } from 'react';

import Whiteboard from '../components/Whiteboard';

import SocketService from '../services/websocket';

class App extends Component {
  componentWillMount() {
    this.drawingService = new SocketService('drawing');
  }

  render() {
    return (
      <div>
        <Whiteboard />
      </div>
    );
  }
}

export default App;
