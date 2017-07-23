angular.module('moviesApp')
  .controller('HomeController', function ($scope, MovieService) {
    $scope.section = 'HOME'

    MovieService.getMovies($scope.searchText)
      .then(function (response) {
        $scope.movies = response.data.results
        console.log(response.data.results)
      })
  })
