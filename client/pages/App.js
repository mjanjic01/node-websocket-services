import React, { Component, Fragment } from 'react';

import MessageList from '../components/MessageList';

import SocketService from '../services/websocket';

class App extends Component {
  componentWillMount() {
    this.chatService = new SocketService('chat');
  }

  render() {
    return (
      <Fragment>
        <MessageList />
      </Fragment>
    );
  }
}

export default App;
