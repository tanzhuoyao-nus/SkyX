import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, InputLabel} from '@material-ui/core'; 
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        username: "",
        usernameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
      });
      this.props.onChange({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      });
    }
  };

  validate = () => {
    let isError = false;

    const errors = {
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      alertPriceError: "",
    };
    // check first name 
    if (/^[a-zA-Z]+$/.test(this.state.firstName)){
      isError = true;
      errors.emailError = "Requires valid First Name";
    }
    // check last name 
    if (/^[a-zA-Z]+$/.test(this.state.lastName)){
      isError = true;
      errors.emailError = "Requires valid Last Name";
    }
    // check if alert price is whole number
    if (isNaN(this.state.alertPrice)) {
      isError = true;
      errors.usernameError = "Enter valid price to nearest integer";
    } else if (this.state.alertPrice - Math.floor(this.state.alertPrice) !== 0) { 
      isError = true;
      errors.usernameError = "Enter valid price to nearest integer";
    } else {}

    //  check if email contains "@"
    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      
        <>
        <form> 
        <Container> 
            <TextField
              required id="standard-required"
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              error={values.firstNameError}
              margin="normal"
              fullWidth
              
            />
            <br />
            <TextField
              required id="standard-required"
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              errorText={values.lastNameError}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              errorText={values.emailError}
              fullWidth
            />
            <br />
            <InputLabel id="country-input">Country</InputLabel>
            <Select
                placeholder="Select country"
                label="Country"
                id="country-select"
                defaultValue={values.country}
                onChange={handleChange('country')}
                margin="normal"
                fullWidth
            >
                <MenuItem value={"Hong Kong"}>Hong Kong</MenuItem>
                <MenuItem value={"London"}>London</MenuItem>
                <MenuItem value={"Kuala Lumpur"}>Kuala Lumpur</MenuItem>
                <MenuItem value={"Bali"}>Bali</MenuItem>
                <MenuItem value={"Tokyo"}>Tokyo</MenuItem>
            </Select>
            <br />
            <TextField
              placeholder="Enter Your Alert Price"
              label="Alert Price"
              onChange={handleChange('alertPrice')}
              defaultValue={values.alertPrice}
              margin="normal"
              errorText={values.alertPriceError}
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start">SGD$</InputAdornment>,
              }}
            />
            
            <TextField
            id="date"
            label="Date"
            type="date"
            onChange={handleChange('date')}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            />

            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              id="confirm-button"
            >Continue</Button>
          </Container> 
          </form>
        </>
     
    );
  }
}

export default FormUserDetails;

