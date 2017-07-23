angular.module('moviesApp')
  .factory('MovieService', function ($http) {
    var apiKey = '30e927d7a4ae25c0027e118d9748d27c'
    var url = 'https://api.themoviedb.org/3/movie/<%CATEGORY%>?api_key=<%API_KEY%>&language=en-US&page=1'
    function getPopulars () {
      var category = 'popular'
      var urlSearch = url
      url.replace('<%API_KEY%>', apiKey).replace('<%CATEGORY%>', category)
      console.log(urlSearch)
      return $http.get('https://api.themoviedb.org/3/movie/popular?api_key=30e927d7a4ae25c0027e118d9748d27c&language=en-US&page=1')
    }
    function getNowPlaying () {
      var category = 'now_playing'
      var urlSearch = url.replace('<%API_KEY%>', apiKey).replace('<%CATEGORY%>', category)
      console.log(urlSearch)
      return $http.get(' https://api.themoviedb.org/3/movie/now_playing?api_key=30e927d7a4ae25c0027e118d9748d27c&language=en-US&page=1')
    }
    function getTopRateds () {
      var category = 'vote_average'
      var urlSearch = url.replace('<%API_KEY%>', apiKey).replace('<%CATEGORY%>', category)
      console.log(urlSearch)
      return $http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=30e927d7a4ae25c0027e118d9748d27c&language=en-US&page=1')
    }
    function getUpcomings () {
      var category = 'upcomings'
      var urlSearch = url.replace('<%API_KEY%>', apiKey).replace('<%CATEGORY%>', category)
      console.log(urlSearch)
      return $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=30e927d7a4ae25c0027e118d9748d27c&language=en-US&page=1')
    }
    return {
      getPopulars: getPopulars,
      getNowPlaying: getNowPlaying,
      getTopRateds: getTopRateds,
      getUpcomings: getUpcomings
    }
  })

//  popularity.asc, popularity.desc, release_date.asc, release_date.desc, revenue.asc, revenue.desc, primary_release_date.asc, primary_release_date.desc, original_title.asc, original_title.desc, vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc
// default: popularity.desc
