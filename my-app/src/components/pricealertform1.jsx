import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, InputLabel } from '@material-ui/core'; 
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <>
        <Container> 
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
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
              placeholder="Enter Your Alert Price ($SGD)"
              label="Alert Price"
              onChange={handleChange('alertPrice')}
              defaultValue={values.alertPrice}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="YYYY-MM-DD"
              label="Date"
              onChange={handleChange('date')}
              defaultValue={values.date}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              id="continue-button"
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Container> 
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;