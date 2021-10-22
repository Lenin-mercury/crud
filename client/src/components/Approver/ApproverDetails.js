import React, {useEffect} from 'react';

//redux
import {connect } from 'react-redux';
// import PropTypes from 'prop-types';

//actions
// import {getCustsbyApp} from '../actions/approver';

import DataTabs from '../utils/ReuseComp/DataTabs';

const ApproverDetails = ({approver:{customers} }) => {


  console.log(customers);

    return (
        <>
            <DataTabs customers={customers}/>
        </>
    );
};

// ApproverDetails.propTypes = {
  
//   };
  
  const mapStateToProps =  state => ({
      approver: state.approver
  })
  
  export default connect(mapStateToProps) (ApproverDetails);