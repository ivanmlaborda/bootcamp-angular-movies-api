angular.module('moviesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/top-rated', {
        templateUrl: 'js/routes/top-rated/template.html',
        controller: 'TopRatedController'
      })
  })
