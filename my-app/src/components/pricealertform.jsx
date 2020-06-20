import React, { Component } from "react";
import "./components.css";

//check for valid email input 
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// checks if input has number -- for firstName & lastName 
function hasNumber(myString) {
  return /\d/.test(myString);
}

// check if form fields are all filled up 
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

//get next month date
function getNextMonth() {
  var date = new Date();
  var nextMonth = date.getDate() + 29;
  date.setDate(nextMonth);
  var dateArr = date.toLocaleDateString().split("/");
  var year = dateArr[2];
  var month = dateArr[1];
  var day = dateArr[0];
  var dateStr = year + "-" + month + "-" + day;
  return dateStr;
}

//component 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      alertPrice: "", 
      country: "", 
      date: "", 
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        alertPrice: "", 
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Country: ${this.state.country}
        Date: ${this.state.date}
        Alert Price: ${this.state.alertPrice}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 || hasNumber(value) ? "please input valid name" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 || hasNumber(value) ? "please input valid name" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Price Alert</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            
            {/* first name */}
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>

            {/* last name */}
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>

            {/* email */}
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            {/* country */}
            <div className="country">
              <label>Country</label>
              <div> 
              <select
                name="country"
                noValidate
                onChange={this.handleChange}
              >
                <option value="Hong Kong">Hong Kong</option>
                <option value="London">London</option>
                <option value="Kuala Lumpur">Kuala Lumpur</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Bali">Bali</option>
              </select>
              </div>
            </div>
            
            
          {/* Date */}
            <div className="email">
              <label>Date</label>
              <input
                type="date"
                name="date"
                noValidate
                onChange={this.handleChange}
                min={getNextMonth()}
              />
            </div>

            {/* Alert Price */}
            <div className="alertPrice">
              <label>Alert Price</label>
              <input
                className={formErrors.alertPrice.length > 0 ? "error" : null}
                placeholder="Alert Price - $SGD"
                noValidate
                type="number"
                name="alertPrice"
                onChange={this.handleChange}
              />
              {formErrors.alertPrice.length > 0 && (
                <span className="errorMessage">{formErrors.alertPrice}</span>
              )}
            </div>

            <div className="createAccount">
              <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;