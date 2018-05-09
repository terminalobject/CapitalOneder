// This file is responsible for the connection to the database. It assumes that username and passwords are passed as environment variables when the server is run.
var mongoose = require('mongoose');
var username = process.env.username;
var password = process.env.password;
mongoose.connect('mongodb://' + username + ':' + password + '@ds119110.mlab.com:19110/capitaloneder');