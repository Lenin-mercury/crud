let express = require("express");
let api = express.Router();
let routers = require("./router");

api.use('/user', routers.user);
api.use('/customer', routers.customer);
api.use('/approver', routers.approver);


module.exports = api;