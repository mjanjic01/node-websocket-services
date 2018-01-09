import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  wrapper: {
    backgroundColor: 'yellow',
    height: '200px'
  },
  label: {
    fontWeight: 'bold'
  }
};

class Whiteboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <canvas></canvas>
      </div>
    );
  }
}

Whiteboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Whiteboard);
