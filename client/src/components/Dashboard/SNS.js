import React, { useState, useEffect, Fragment } from "react";
// import { Redirect, Link } from "react-router-dom";
//redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import store from '../../store';

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

//actions
import {
  createCustomer,
  getallCustomer,
  deleteCustomer,
  updateCustomer,
} from "../actions/customer";

const SNS = ({
  createCustomer,
  getallCustomer,
  deleteCustomer,
  updateCustomer,
  customer: { customers },
}) => {
  useEffect(() => {
    getallCustomer();
  }, [getallCustomer]);

  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    medicareID: "",
    address: "",
    status: "",
  });

  const { name, email, phone, dob, medicareID, address, status } = formData;

  const onChange = (e) =>
    setFormdata({ ...formData, [e.target.name]: e.target.value });

  const edithandleClickOpen = (customer) => {
    setFormdata(customer);
    setOpen(true);
    setEdit(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    edit ? updateCustomer(formData._id, formData) : createCustomer(formData);
    setFormdata("");
    setEdit(false);
  };

  const handleClose = () => {
    setOpen(false);
    // setEdit(false)
  };
  return (
    <Fragment>
      {/* <Addcustform/> */}
      <div className="sns">
        <h1>SNS</h1>
        <Button color="primary" variant="contained" onClick={handleClickOpen}>
          Add Customer
        </Button>
        <br />
        <div>
          <table class="table">
            <thead>
              <tr>
                {/* <th scope="col">S.No.</th> */}
                <th scope="col">S.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Medicare ID</th>
                <th scope="col">Status</th>
                <th scope="col" className="cust__menu">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {customers && customers.length > 0 ? (
                customers.map((customer, index) => (
                  <Fragment>
                    <tr>
                      <th scope="row"> {index + 1} </th>
                      <td>{customer.name}</td>
                      <td>{customer.phone}</td>
                      <td>{customer.email}</td>
                      <td>{customer.address}</td>
                      <td>{customer.dob}</td>
                      <td>{customer.medicareID}</td>
                      <td>{customer.status}</td>

                      <td>
                        <button
                          className="btn btn-primary cust__button"
                          onClick={() => edithandleClickOpen(customer)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          onClick={(e) => deleteCustomer(customer._id)}
                          className="btn btn-danger cust__button"
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>

                        {/* <button className="btn btn-danger cust__button">
                  <i className="far fa-eye"></i>
            </button> */}
                      </td>
                    </tr>
                  </Fragment>
                ))
              ) : (
                <h4>No customers found...</h4>
              )}
            </tbody>
          </table>
        </div>

        <Dialog enableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <form
              action="submit"
              className="sns__form"
              onSubmit={(e) => onSubmit(e)}
            >
              <TextField
                variant="outlined"
                margin="normal"
                // required
                fullWidth
                id="name"
                label="Name"
                name="name"
                // autoComplete="email"
                value={name}
                onChange={(e) => onChange(e)}
                autoFocus
                className="sns__input"
              />
              <TextField
                variant="outlined"
                margin="normal"
                // required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                // autoComplete="email"
                value={email}
                onChange={(e) => onChange(e)}
                className="sns__input"
              />
              <TextField
                variant="outlined"
                margin="normal"
                // required
                fullWidth
                id="phone"
                label="Phone Number "
                name="phone"
                // autoComplete="phone"
                value={phone}
                onChange={(e) => onChange(e)}
                className="sns__input"
              />
              <TextField
                variant="outlined"
                margin="normal"
                // required
                fullWidth
                id="dob"
                label="Date of Birth"
                name="dob"
                // autoComplete="dob"
                value={dob}
                onChange={(e) => onChange(e)}
                className="sns__input"
              />
              <TextField
                variant="outlined"
                margin="normal"
                // required
                fullWidth
                id="Address"
                label="Address"
                name="address"
                // autoComplete="dob"
                value={address}
                onChange={(e) => onChange(e)}
                className="sns__input"
              />

              <TextField
                variant="outlined"
                margin="normal"
                // required
                fullWidth
                id="medicareID"
                label="Medicare ID"
                name="medicareID"
                // autoComplete="dob"
                value={medicareID}
                onChange={(e) => onChange(e)}
                className="sns__input"
              />
              <TextField
                variant="outlined"
                margin="normal"
                // required
                fullWidth
                id="status"
                label="Status"
                name="status"
                // autoComplete="dob"
                value={status}
                onChange={(e) => onChange(e)}
                className="sns__input"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleClose}
                // className={classes.submit}
              >
                Submit
              </Button>
              {"  "}

              <Button
                variant="contained"
                color="primary"
                onClick={handleClose}
                className="sns__button"
              >
                Cancel
              </Button>
            </form>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
    </Fragment>
  );
};

SNS.propTypes = {
  createCustomer: PropTypes.func.isRequired,
  getallCustomer: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated
  customer: state.customer,
});

export default connect(mapStateToProps, {
  createCustomer,
  getallCustomer,
  deleteCustomer,
  updateCustomer,
})(SNS);
