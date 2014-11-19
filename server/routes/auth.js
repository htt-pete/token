'use strict';

var authController = require('./../controllers/auth');

module.exports =  function(app) {
    // auth routes
    app
    .route('/auth/login')
    .post(authController.login);

    app
    .route('/auth/register')
    .post(authController.register);

    return app;
};