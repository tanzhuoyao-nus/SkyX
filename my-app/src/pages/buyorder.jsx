import React from 'react'; 
import './pages.css'; 
import Navbar from '../components/navbar';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Date from '../components/date'; 
import { Container } from '@material-ui/core'

//styling 
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '25ch',
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
  }));

  //Price Alert Form 
  export default function Pricealert () {
    const classes = useStyles();
    const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  
    return (
      <div> 
          <Navbar/>
          <h1> Price Alert  </h1>
          <hr></hr>
          <Container className="featuresExplainer">Buy Order is a function where users can place a specified price. Once the tracking engine determines that the target price has been hit, it will automate the ticket purchase process. 
          </Container>
      
      <form className={classes.root} noValidate autoComplete="off">
      <h3> Personal Particulars </h3>
            <TextField
                required
                id="outlined-required"
                label="First Name"
                variant="outlined"
            />
            <TextField
                required
                id="outlined-required"
                label="Last Name"
                variant="outlined"
            />

            <TextField
                required
                id="outlined-required"
                label="Your email"
                placeholder="Your Email"
                variant="outlined"
            />
        <h3> Buy Order </h3>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={country}
                onChange={handleChange}
                label="Country"
                >

                <MenuItem value={"Hong Kong"}>Hong Kong</MenuItem>
                <MenuItem value={"Tokyo"}>Tokyo</MenuItem>
                <MenuItem value={"London"}>London</MenuItem>
                <MenuItem value={"Kuala Lumpur"}>Kuala Lumpur</MenuItem>
                <MenuItem value={"Bali"}>Bali</MenuItem>
                </Select>
            </FormControl>

            <TextField
                required
                id="outlined-required"
                label="Alert Price"
                placeholder="Alert Price"
                variant="outlined"
            />
            <br/>
            <h6 id="notif"> * You will be notified when flight prices drop below your alert price. </h6>
        <h3> Date </h3>
        <Date />

      </form>
      </div>  
    );
  }
