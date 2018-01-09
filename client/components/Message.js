import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  wrapper: {
    backgroundColor: 'red',
    height: '200px'
  },
  label: {
    fontWeight: 'bold'
  }
};

class Message extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <p>Message text</p>
      </div>
    );
  }
}

Message.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Message);
