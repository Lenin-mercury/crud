import React, { useEffect } from 'react';
import Drawer from './ResponsiveDrawer'
import SNS from './SNS';

import Spinner from '../routing/Spinner';

//redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {loadUser} from '../actions/auth';


const Dashoard = ({loadUser,auth:{loading, user}}) => {

    useEffect(() => {
        loadUser()
      }, [loadUser]);


    if(loading){
        return <Spinner/>
    }
    else
    {
        return(
            <Drawer name={user && user.name && user.name.length? user.name:"value" } >
                <SNS/>
            </Drawer>
        )
    }
};

Dashoard.propTypes = {
    auth: PropTypes.object.isRequired,
    loadUser: PropTypes.func.isRequired

  };

  const mapStateToProps =  state => ({
    auth:state.auth
  })

  export default connect(
    mapStateToProps, {loadUser}
    ) (Dashoard);
  