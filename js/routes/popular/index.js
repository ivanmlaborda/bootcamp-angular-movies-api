angular.module('moviesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/popular', {
        templateUrl: 'js/routes/popular/template.html',
        controller: 'PopularController'
      })
  })
