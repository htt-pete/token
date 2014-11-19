'use strict';

var authControllers = require('./../controllers/auth');

module.exports =  function(app) {
    // auth routes
    app
    .route('/auth/login')
    .post(authControllers.login);

    app
    .route('/auth/register')
    .post(authControllers.register);

    return app;
};