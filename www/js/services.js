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
                '?' + 'offset='+(pageOffset * 25) +'&'+ key)
		.success(cb)
		.error(err);
}
});
