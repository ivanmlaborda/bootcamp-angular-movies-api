angular.module('moviesApp')
  .factory('MovieService', function ($http) {
    var apiKey = '30e927d7a4ae25c0027e118d9748d27c'
    var url = 'https://api.themoviedb.org/3/<%CATEGORY%>?&api_key=<%API_KEY%>'
    function getPopulars () {
      var category = 'discover/movie?sort_by=popularity.desc'
      var urlSearch = url.replace('<%API_KEY%>', apiKey).replace('<%CATEGORY%>', category)
      return $http.get(urlSearch)
    }

    return {
      getPopulars: getPopulars
    }
  })
