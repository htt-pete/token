module.exports =  function (app, router) {

    var movieRoute = router.route('/movies');


    movieRoute
    .get(function(req, res){
        res.json(movies);
    });

};

var movies = [
    {title: 'Interstellar', rating: 8.5, img: 'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX640_SY720_.jpg'},
    {title: 'Toy Story', rating: 9, img: 'http://ia.media-imdb.com/images/M/MV5BMTgwMjI4MzU5N15BMl5BanBnXkFtZTcwMTMyNTk3OA@@._V1_SX640_SY720_.jpg'},
    {title: 'The Dark Knight', rating: 9, img: 'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX640_SY720_.jpg'},
    {title: 'Drive', rating: 8, img: 'http://ia.media-imdb.com/images/M/MV5BOTM1ODQ0Nzc4NF5BMl5BanBnXkFtZTcwMTM0MjQyNg@@._V1_SX640_SY720_.jpg'}
];