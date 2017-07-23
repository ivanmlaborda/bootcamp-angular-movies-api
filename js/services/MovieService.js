angular.module('moviesApp')
  .factory('MovieService', function ($http) {
    var apiKey = '30e927d7a4ae25c0027e118d9748d27c'
    var url = 'https://api.themoviedb.org/3/movie/<%CATEGORY%>?api_key=<%API_KEY%>&language=en-US&page=1'
    function getMovies (query) {
      var urlQuery = 'https://api.themoviedb.org/3/search/movie?api_key=30e927d7a4ae25c0027e118d9748d27c&language=en-US&query=<%QUERY%>&page=1&include_adult=true'
      urlQuery.replace('<%API_KEY%>', apiKey).replace('<%QUERY%>', query)
      // console.log(urlSearch)
      return $http.get(urlQuery)
    }
    function getPopulars () {
      var category = 'popular'
      var urlSearch = url
      urlSearch.replace('<%API_KEY%>', apiKey).replace('<%CATEGORY%>', category)
      // console.log(urlSearch)
      return $http.get('https://api.themoviedb.org/3/movie/popular?api_key=30e927d7a4ae25c0027e118d9748d27c&language=en-US&page=1')
    }
    function getNowPlaying () {
      var category = 'now_playing'
      var urlSearch = url
      urlSearch = urlSearch.replace('<%API_KEY%>', apiKey).replace('<%CATEGORY%>', category)
      // console.log(urlSearch)
      return $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=30e927d7a4ae25c0027e118d9748d27c&language=en-US&page=1')
    }
    function getTopRateds () {
      var category = 'top_rated'
      var urlSearch = url
      urlSearch = urlSearch.replace('<%API_KEY%>', apiKey).replace('<%CATEGORY%>', category)
      // console.log(urlSearch)
      return $http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=30e927d7a4ae25c0027e118d9748d27c&language=en-US&page=1')
    }
    function getUpcomings () {
      var category = 'upcoming'
      var urlSearch = url
      urlSearch = urlSearch.replace('<%API_KEY%>', apiKey).replace('<%CATEGORY%>', category)
      // console.log(urlSearch)
      return $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=30e927d7a4ae25c0027e118d9748d27c&language=en-US&page=1')
    }
    return {
      getMovies: getMovies,
      getPopulars: getPopulars,
      getNowPlaying: getNowPlaying,
      getTopRateds: getTopRateds,
      getUpcomings: getUpcomings
    }
  })
