var User = require('./../../models/user');
var mongoose = require('mongoose');
var config = require('./../index');
var _ = require('underscore');
var users = require('./seeds/users');

function populate () {
    mongoose.connect(config.db);
    console.log('---------------------');
    console.log('inserting data' + '\n');
    User.remove({}, function(err){
        _.each(users, function(user){
            console.log(user);
            var u = new User(user);
            u.save(user, function(err, u){
                // mongoose.connection.clos();
            });
        });
    });
    mongoose.connection.close();
}

populate();