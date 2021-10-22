const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const roleOfUser = require('./constants/userroles')

const ApproverSchema = new Schema({
   name: { type: String, required: true },
   lastname: { type: String, },
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true, minlength: 6 },
   token: { type: String },
//    role:{type: String, default: "Approver"},
   Date: { type: Date, default: Date.now }
});
module.exports  = mongoose.model('approver',ApproverSchema);