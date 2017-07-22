angular.module('moviesApp')
  .controller('TopRatedController', function ($scope, MovieService) {
    $scope.section = 'TOP RATED'

    // MovieService.getTopRateds()
    //   .then(function (response) {
    //     $scope.getTopRateds = response.data
    //     console.log(response.data)
    //   })
  })
