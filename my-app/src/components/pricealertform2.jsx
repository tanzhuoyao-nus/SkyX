import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core'; 

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  validate = () => {
    let isError = false;
    const errors = {
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailError: "",
      passwordError: ""
    };

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    if (isNaN(this.state.alertPrice)) { 
      isError = true; 
      errors.alertProceError = "Requires valid price input";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        firstName: '',
        firstNameError: '', 
        lastName: '',
        lastNameError: '', 
        email: '',
        emailError: '', 
        country: '',
        alertPrice: '',
        alertPriceError: '', 
        date: ''
      });
      this.props.onChange({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        alertPrice: "", 
        date: ""
      });
    }
  };

  render() {
    const {
      values: { firstName, lastName, email, country, alertPrice, date }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Container> 
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Country" secondary={country} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Alert Price" secondary={alertPrice}  />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date" secondary={date} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
              id="back-button"
            >Back</Button>
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              id="confirm-button"
            >Submit</Button>
            <h6> Please ensure all fields are filled in before submitting. </h6>
          </Container>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;