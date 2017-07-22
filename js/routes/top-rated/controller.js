angular.module('moviesApp')
  .controller('TopRatedController', function ($scope, MovieService) {
    $scope.section = 'TOP RATED'

    MovieService.getTopRateds()
      .then(function (response) {
        $scope.topRateds = response.data.results
        console.log(response.data.results)
      })
  })
