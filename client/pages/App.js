import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';
import AlertDialog from '../components/AlertDialog';

import SocketService from '../services/websocket';


const styles = {
  wrapper: {
    height: '100%',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between'
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentMessage: '',
      isAlertOpen: false
    };
  }

  componentWillMount() {
    try {
      this.chatService = new SocketService('chat');

      this.chatService.onOpenEvent(() => {
      });

      this.chatService.onMessageEvent(this.messageRecieved.bind(this));
    } catch (error) {
      this.openAlertDialog();
    }
  }

  messageRecieved(message) {
    this.setState(prevState => ({
      messages: prevState.messages.concat({
        direction: 'INCOMING',
        text: message
      })
    }));
  }

  handleMessageChanged(value) {
    this.setState({
      currentMessage: value
    });
  }

  handleMessageSend() {
    this.chatService.send(this.state.currentMessage);

    this.setState(prevState => ({
      messages: prevState.messages.concat({
        direction: 'OUTGOING',
        text: this.state.currentMessage
      }),
      currentMessage: ''
    }));
  }

  openAlertDialog() {
    this.setState({
      isAlertOpen: true
    });
  }

  handleAlertDialogClose() {
    this.setState({
      isAlertOpen: false
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <MessageList messages={this.state.messages} />
        <MessageInput
          text={this.state.currentMessage}
          isSendEnabled={this.state.currentMessage.length > 0}
          onMessageChange={this.handleMessageChanged.bind(this)}
          onMessageSend={this.handleMessageSend.bind(this)}
        />
        <AlertDialog
          open={this.state.isAlertOpen}
          onDialogClose={this.handleAlertDialogClose.bind(this)}/>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
