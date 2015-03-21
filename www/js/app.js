// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards', 'starter.services'])


.config(function($stateProvider, $urlRouterProvider) {

})

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})

.controller('CardsCtrl', function($scope, TDCardDelegate, giphyService) {
  console.log('CARDS CTRL');
  var cardTypes = [];
  var refreshes = 0;

  giphyService.trending(refreshes, function(resp){
    console.log(resp);
    angular.forEach(resp.data, function(giphy){
      //console.log(giphy.images.fixed_width.url + ' '+giphy.id);
      cardTypes.push({ image: giphy.images.fixed_width.url, id: giphy.id})
    })
    $scope.cards = cardTypes;
  });

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCards = function() {
    refreshes++;
    giphyService.trending(refreshes, function(resp){
      console.log(resp);
      angular.forEach(resp.data, function(giphy){
        //console.log(giphy.images.fixed_width.url + ' '+giphy.id);
        cardTypes.push({ image: giphy.images.fixed_width.url, id: giphy.id})
      })
      $scope.cards = cardTypes;
    });
  }
})

.controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    if($scope.cards.length === 0){
      $scope.addCards();
    }
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    if($scope.cards.length === 0){
      $scope.addCards();
    }
  };
});
