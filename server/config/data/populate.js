var User = require('./../../models/user');
var mongoose = require('mongoose');
var config = require('./../index');
var _ = require('underscore');
var users = require('./seeds/users');

function populate () {

    mongoose.connect(config.db, function(err) {
    if (err) {console.log(err);}

    else{

    console.log('---------------------');
    console.log('inserting data' + '\n');
    User.remove({}, function(err){
        mongoose.connection.close();
    });

    _.each(users, function (user) {
            console.log(user);
            var u = new User(user);
            u.save(user, function(err, u){

            });
    });
}
    });
    
}

populate();