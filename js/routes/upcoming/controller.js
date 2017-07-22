angular.module('moviesApp')
  .controller('UpcomingController', function ($scope, MovieService) {
    $scope.section = 'UPCOMING'

    MovieService.getUpcomings()
      .then(function (response) {
        $scope.upcomings = response.data.results
        console.log(response.data.results)
      })
  })
