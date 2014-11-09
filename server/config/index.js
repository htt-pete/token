module.exports =  {
    db:'mongodb://localhost:27017/token',
    token: {
        secret: 'this.is.sparta',
        expires: 7 // days
    }
};
