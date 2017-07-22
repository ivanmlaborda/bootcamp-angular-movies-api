angular.module('moviesApp')
  .factory('MovieService', function ($http) {
    var apiKey = '30e927d7a4ae25c0027e118d9748d27c'
    var url = 'https://api.themoviedb.org/3/<%CATEGORY%>?&api_key=<%API_KEY%>'
    function getPopulars () {
      var category = 'discover/movie?sort_by=popularity.desc'
      var urlSearch = url.replace('<%API_KEY%>', apiKey).replace('<%CATEGORY%>', category)
      return $http.get(urlSearch)
    }

    function getNowPlaying () {
      var category = 'discover/movie?sort_by=now_playing.desc'
      var urlSearch = url.replace('<%API_KEY%>', apiKey).replace('<%CATEGORY%>', category)
      return $http.get(urlSearch)
    }

    function getTopRateds () {
      var category = 'discover/movie?sort_by=vote_average.desc'
      var urlSearch = url.replace('<%API_KEY%>', apiKey).replace('<%CATEGORY%>', category)
      return $http.get(urlSearch)
    }

    function getUpcomings () {
      var category = 'discover/movie?sort_by=upcomings.desc'
      var urlSearch = url.replace('<%API_KEY%>', apiKey).replace('<%CATEGORY%>', category)
      return $http.get(urlSearch)
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
