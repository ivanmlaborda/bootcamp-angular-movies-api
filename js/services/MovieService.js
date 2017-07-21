angular.module('moviesApp')
  .factory('MovieService', function ($http) {
    function getPopulars () {
      var url = 'https://api.themoviedb.org/3/movie/550?api_key=30e927d7a4ae25c0027e118d9748d27c'
      return $http.get(url)
    }

    return {
      getPopulars: getPopulars
    }
  })
