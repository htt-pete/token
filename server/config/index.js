module.exports =  {
    public: './../../public',
    db:'mongodb://localhost:27017/token',
    token: {
        secret: 'this.is.sparta',
        expires: 7 // days
    },
    upload: {
        uploadsDir: './../../public/media/uploads',
        tmpDir: './../../public/media/tmp'
    }
};
