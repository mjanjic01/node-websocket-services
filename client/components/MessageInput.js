import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Input from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';

import SendIcon from 'material-ui-icons/Send';

const styles = {
  wrapper: {
    display: 'flex',
    'align-items': 'center',
    'background-color': '#FFFFFF',
    padding: '10px',
  }
};

class MessageInput extends Component {
  handleChange(event) {
    this.props.onMessageChange(event.target.value);
  }

  handleSubmit() {
    this.props.onMessageSend();
  }

  handleKeyPress(event) {
    if (event.key === 'Enter' && this.props.isSendEnabled) {
      this.props.onMessageSend();
    }
  }

  render() {
    const {
      classes,
      text,
      isSendEnabled
    } = this.props;

    return (
      <div className={classes.wrapper} >
        <Input
          value={text}
          className={classes.input}
          disableUnderline={true}
          fullWidth={true}
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
        <IconButton
          disabled={!isSendEnabled}
          onClick={this.handleSubmit.bind(this)}
          color="accent"
          aria-label="Send message"
        >
          <SendIcon />
        </IconButton>
      </div>
    );
  }
}

MessageInput.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
  isSendEnabled: PropTypes.bool.isRequired,
  onMessageSend: PropTypes.func,
  onMessageChange: PropTypes.func
};

export default withStyles(styles)(MessageInput);
