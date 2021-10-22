import React, {
    // Fragment, 
    useEffect
          }
from 'react';

//redux
import {connect } from 'react-redux';
import PropTypes from 'prop-types';

//actions
import {loadApprover, getCustsbyApp} from '../actions/approver';

//material ui
import Drawer from '../Dashboard/ResponsiveDrawer';
import ApproverDetails from './ApproverDetails';
import { Redirect } from 'react-router-dom';

const AppDashboard = ({loadApprover,getCustsbyApp, approver:{loading,approver, isAuthenticated, customers}}) => {
  
    useEffect(() => {
        loadApprover();
      }, [loadApprover]);

    const id = approver && approver._id && approver._id.length? approver._id:"";
    
      console.log(id);

      useEffect(() => {
        getCustsbyApp(id);
      }, [getCustsbyApp]);

      if(!isAuthenticated){
       
       return <Redirect to="/"/>  
      }
 
      // if(loading === false){
      //   //  getCustsbyApp(id);
      // }

    return (
        <>
           <Drawer name={approver && approver.name && approver.name.length? approver.name:"value" }>
                <ApproverDetails/>
                {/* <ApproverDetails customers={customers}/> */}
           </Drawer>
        </>
    );
};

AppDashboard.propTypes = {
    loadApprover: PropTypes.func.isRequired,
    getCustsbyApp: PropTypes.func.isRequired
  };
  
  const mapStateToProps =  state => ({
    approver: state.approver
  })
  
  export default connect(mapStateToProps , {loadApprover, getCustsbyApp}) (AppDashboard);


  