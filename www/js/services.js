'use strict';

angular.module('starter.services', [])
.service('giphyService', function gifs($http) {

// config
var key = 'api_key=dc6zaTOxFJmzC';

this.byId = function (id, cb, err) {
  $http.get('http://api.giphy.com/v1/gifs/'
           + id
           + '?' + key)
       .success(cb)
       .error(err);
};
this.search = function (q, page, cb, err) {
  $http.get('http://api.giphy.com/v1/gifs/search?q='
           + q
           + '&offset=' + (page * 25)
           + '&limit=' + limit
           + '&sort=recent' // it may not do anything (it was not documented)
           + '&' + key)
       .success(cb)
       .error(err);
};
this.trending = function(pageOffset, cb, err){
	$http.get('http://api.giphy.com/v1/gifs/trending' +
                '?' + 'offset='+(pageOffset * 10) + '&limit=10'+'&'+ key)
		.success(cb)
		.error(err);
}
})
.factory('favorites', ['$window', function($window){
	return{
		clearFavorites: function(){			
			$window.localStorage['favorites'] = JSON.stringify([]);
		},
		addFavorite: function(value){
			if(typeof(window.localStorage['favorites']) === 'undefined'){
				$window.localStorage['favorites'] = JSON.stringify([]);	
			}
			var temp = JSON.parse($window.localStorage['favorites']);
			temp.push(value);
			$window.localStorage['favorites'] = JSON.stringify(temp);
		},

		getFavorites: function(){
			return JSON.parse($window.localStorage['favorites']);
		}
	}
}]);
