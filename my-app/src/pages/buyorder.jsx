import React from 'react'; 
import './pages.css'; 
import Navbar from '../components/navbar';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

//styling 
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '25ch',
      },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '25ch',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
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
      
      <form className={classes.root} noValidate autoComplete="off">
        
        <div>
            <TextField
                required
                id="outlined-required"
                label="First Name"
                variant="outlined"
            />
        </div>
        <div>
            <TextField
                required
                id="outlined-required"
                label="Last Name"
                variant="outlined"
            />
        </div>
        <div>
            <TextField
                required
                id="outlined-required"
                label="Your email"
                placeholder="Your Email"
                variant="outlined"
            />
        </div>
        <div>
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
        </div>
        <div>
            <TextField
                required
                id="outlined-required"
                label="Alert Price"
                placeholder="Alert Price"
                variant="outlined"
            />
        </div>

      </form>
      </div>  
    );
  }
