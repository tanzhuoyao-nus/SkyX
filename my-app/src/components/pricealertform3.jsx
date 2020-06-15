import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          
            <h1>Thank You For Your Submission</h1>
            <p>You will get a notification email once alert price is hit.</p>
          
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;