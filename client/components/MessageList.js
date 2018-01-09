import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';

import Message from './Message';

const styles = {
  wrapper: {
    backgroundColor: 'yellow',
    height: '200px'
  },
  label: {
    fontWeight: 'bold'
  }
};

class MessageList extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <Button>HAHA</Button>
        <Message />
        <Message />
        <Message />
      </div>
    );
  }
}

MessageList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MessageList);
