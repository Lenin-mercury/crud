import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import UserLogin from '../UserLogin';
import AppLogin from '../../Approver/AppLogin';

import {useDispatch} from 'react-redux';


//redux
import {connect } from 'react-redux';
import PropTypes from 'prop-types';

//actions
import {loadApprover} from '../../actions/approver';
import {loadUser} from '../../actions/auth';


const Login = ({loadApprover, loadUser}) => {

    useEffect(() => {
        loadApprover()
      }, [loadApprover]);

    useEffect(() => {
        loadUser()
      }, [loadUser]);


    return (
        <>
            <Grid container>
                <Grid item sm={12} xs= {12}>
                    <AppLogin/>
                </Grid>
            </Grid>

        </>
    );
};

Login.propTypes = {
    loadApprover: PropTypes.func.isRequired,
    // loadUser: PropTypes.func.isRequired
  };

  const mapStateToProps =  state => ({

  })

  const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: () => dispatch(loadUser()),
        loadApprover: () => dispatch(loadApprover())
    }
}

  export default connect(mapStateToProps , mapDispatchToProps) (Login);