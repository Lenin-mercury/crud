import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//redux
import {connect } from 'react-redux';
import PropTypes from 'prop-types';

//actions
// import { getCustsbyApp } from "../../actions/approver";


import ReTable from './ReTable';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const DataTabs = (props)=> {

  const{customers } = props;

  // console.log(customers);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {

    setValue(newValue);

  };
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        // centered
      >
        <Tab label="All Customers "/>
          {/* map all the title of the users her */}
        <Tab label="User 1's Customers" onClick={() => console.log("User 1's Customers")}/>
        <Tab label="User 2's Customer" onClick={() => console.log("User 2's Customers")}/>  
      </Tabs>
      {
        customers ?  <ReTable customers= {customers}/> :   <h4>No Customers</h4>
      }

   

    </Paper>
  );
}

export default DataTabs;