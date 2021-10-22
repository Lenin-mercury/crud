const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('config');
const Approver_controller = require('../../controllers/Approver_controller');
 
//import model
// const { Approver } = require('../../models/Approver');

//import middlewaare
let { authApp } = require('../../middleware/auth');

//@route post api/Approvers
//@desc Register Approver
//@access Public



router.get("/",  authApp, Approver_controller.loadApprover);

router.post("/create", Approver_controller.createApprover);
router.get("/getcustsbyapp/:id", Approver_controller.getAllCust);
router.get("/getusersbyapp/:id", Approver_controller.getAllUser);
router.get("/getcustbyuser/:id", Approver_controller.getAllCustByUserId);

router.post("/login", [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
   Approver_controller.loginApprover);

module.exports = router;

