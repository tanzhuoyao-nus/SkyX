import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core'; 
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  
  render() {
    const { values, handleChange } = this.props;
    const {useStyles} = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));

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
            <Select
                placeholder="Select country"
                label="Country"
                id="demo-simple-select"
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