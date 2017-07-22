angular.module('moviesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/now-playing', {
        templateUrl: 'js/routes/now-playing/template.html',
        controller: 'NowPlayingController'
      })
  })
