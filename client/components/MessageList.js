import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Message from './Message';

const styles = {
  wrapper: {
    'overflow-y': 'scroll',
    'overflow-x': 'hidden',
    height: '100%',
    padding: '10px',
    'background-color': '#F2F2F2'
  }
};

class MessageList extends Component {
  componentDidUpdate(newProps) {
    if (this.props.messages.length !== newProps.messages.length) {
      this.container.scrollTop = this.container.scrollHeight;
    }
  }

  render() {
    const { classes, messages } = this.props;

    return (
      <div
        ref={(container) => { this.container = container; }}
        className={classes.wrapper}
      >
        {messages.map((message, index) => (
          <Message
            key={index}
            direction={message.direction}
            text={message.text}
          />))}
      </div>
    );
  }
}

MessageList.propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.array
};

export default withStyles(styles)(MessageList);
