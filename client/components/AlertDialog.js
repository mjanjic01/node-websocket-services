import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';


class AlertDialog extends Component {
  handleClose() {
    this.props.onDialogClose();
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose.bind(this)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'WebSocket not available'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Unfortunately, the browser you are using does not support WebSocket technology.
              This feature will be unavailable.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose.bind(this)} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onDialogClose: PropTypes.func
};

export default AlertDialog;
