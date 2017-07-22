angular.module('moviesApp')
  .controller('NowPlayingController', function ($scope, MovieService) {
    $scope.section = 'NOW PLAYING'

    MovieService.getNowPlaying()
      .then(function (response) {
        $scope.nowPlaying = response.data.results
        console.log(response.data.results)
      })
  })
