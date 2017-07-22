angular.module('moviesApp')
  .controller('PopularController', function ($scope, MovieService) {
    $scope.section = 'POPULAR'

    MovieService.getPopulars()
      .then(function (response) {
        $scope.populars = response.data.results
        console.log(response.data.results)
        // $scope.imgPath = response.data.results
      })
  })
