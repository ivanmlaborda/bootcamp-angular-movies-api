angular.module('moviesApp')
  .controller('NowPlayingController', function ($scope, MovieService) {
    $scope.section = 'NOW PLAYING'

    // MovieService.getNowPlaying.data
    // console.log(response.data)
  })
