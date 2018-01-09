import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import { red } from 'material-ui/colors';

const styles = {
  bubble: {
    position: 'relative',
    margin: '20px auto',
    padding: '10px',
    color: '#FFFFFF',
    'margin-right': 'auto',
    'margin-left': 0,
    'background-color': red[500],
    'box-shadow': '0px 1px 0px 0px rgba(50, 50, 50, 0.3)',
    'border-radius': '2px',
    'max-width': '45%',
    'min-width': '200px',
    'word-break': 'break-word',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: 0,
      height: 0,
      top: 0,
      left: '-9px',
      'border-style': 'solid',
      'border-width': '0 10px 10px 0',
      'border-color': `transparent ${red[500]} transparent transparent`,
    },
  },
  outgoing: {
    'background-color': '#FFFFFF',
    color: '#333333',
    'text-align': 'right',
    'margin-left': 'auto',
    'margin-right': 0,
    '&::before': {
      left: 'auto',
      right: '-9px',
      'border-width': '10px 10px 0 0',
      'border-color': '#FFFFFF transparent transparent transparent'
    }
  }
};

class Message extends Component {
  render() {
    const {
      classes,
      direction,
      text
    } = this.props;

    return (
      <div className={`${classes.bubble} ${direction === 'OUTGOING' ? classes.outgoing : ''} bounceIn`}>
        {text}
      </div>
    );
  }
}

Message.propTypes = {
  direction: PropTypes.oneOf(['INCOMING', 'OUTGOING']),
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles)(Message);
