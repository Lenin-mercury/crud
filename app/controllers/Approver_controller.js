
var wrapper = require('../models/constants/wrapper.js');

const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
// const auth = require('../middleware/auth');

const mongoose = require('mongoose');
var User = mongoose.model('user')

const Approver = require('../models/Approver');
const Customer = require('../models/Customer');


module.exports.createApprover = async function (req, res) {
try{   
    newApprover = new Approver();
    newApprover.name = req.body.name;
    newApprover.lastname = req.body.lastname;
    newApprover.email = req.body.email;
    newApprover.password = req.body.password;
    newApprover.token = req.body.token;
    newApprover.Date = new Date();
    // newApprover.role = role;

    const salt = await bcrypt.genSalt(10);
    newApprover.password = await bcrypt.hash(newApprover.password, salt);
     await newApprover.save();

    // res.status(wrapper.SuccessCode).json(docs);

    const payload = {
        newApprover: {
                        id: newApprover.id
                    }
                }
                //return jssonwebtoken
                jwt.sign(
                    payload,
                    config.get('jwtSECRET'),
                    { expiresIn: 3600 },
                    (err, token) => {
                        if (err) throw err;
                        res.status(wrapper.SuccessCode).json({ token });
                    }
                );


}catch(err){
    console.log(err)
    res.status(wrapper.FailureCode).json({ error: wrapper.FailureStatus });
}
}

// //get all Approver
// module.exports.getAllApprover= async function (req, res) {
//     try {
//         const searchCriteria = {
//             statusflag: "A",            
//         };
//         // const getApprover = await Approver.find(searchCriteria).exec();
//         let getApprover = await Approver.find();

//         res.status(wrapper.SuccessCode).json({ getApprover: getApprover })
//     } catch (e) {
//         res.status(wrapper.FailureCode).json({ error: wrapper.FailureStatus });
//     }
// }

//get all customer under user By id
module.exports.getAllCustByUserId= async function (req, res) {
  try {
    let customers = await Customer.find({user:req.params.id});
    // let customers = await Customer.find();

    res.status(wrapper.SuccessCode).json({ getAllCustByUserId: customers });
} catch (e) {
    res.status(wrapper.FailureCode).json({ error: wrapper.FailureStatus });
}
}

//Get all Customer of this Approver
module.exports.getAllCust= async function (req, res) {
  try {
    // let customers = await Customer.find({approver:req.params.id});
    let customers = await Customer.find({approver:req.params.id}).populate('user', ['name', 'email']);

    res.status(wrapper.SuccessCode).json({ AppCustomers: customers });
} catch (e) {
    res.status(wrapper.FailureCode).json({ error: wrapper.FailureStatus });
}
}
//Get all Users of this Approver
module.exports.getAllUser= async function (req, res) {
  try {
    let users = await User.find({approver:req.params.id});

    res.status(wrapper.SuccessCode).json({ AppUsers: users });
} catch (e) {
    res.status(wrapper.FailureCode).json({ error: wrapper.FailureStatus });
}
}

module.exports.loginApprover = async (req, res) => 
{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    
    try {
      let approver = await Approver.findOne({ email });

      if (!approver) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, approver.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Password ' }] });
      }

      const payload = {
        approver: {
          id: approver.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSECRET'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
  
  //get Approver By id
module.exports.loadApprover= async function (req, res) {
  try {
    let approver = await Approver.findById(req.approver.id).select('-password');
    res.json(approver);
   } catch (err) {
       console.error(err.message);
       res.status(500).send("Server Error");
   }

}