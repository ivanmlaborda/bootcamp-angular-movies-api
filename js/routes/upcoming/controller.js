angular.module('moviesApp')
  .controller('UpcomingController', function ($scope, MovieService) {
    $scope.section = 'UPCOMING'

    // MovieService.getUpcomings()
    //   .then(function (response) {
    //     $scope.upcomings = response.data
    //     console.log(response.data)
    //   })
  })
