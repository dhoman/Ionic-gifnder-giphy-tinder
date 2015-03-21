'use strict';
/*
angular.module('giphyService', [])
  .service('gifs', function gifs($http) {

    // config
    var url = 'http://api.giphy.com/v1/gifs/',
        key = 'api_key=dc6zaTOxFJmzC',
        limit = 25;



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
});
    */
angular.module('starter.services', [])
.factory('giphyFactory', function($http){
	var _gifs = [];
    var key = 'api_key=dc6zaTOxFJmzC';

	return{
		getGifs: function(){
			return $http.get('http://api.giphy.com/v1/gifs/trending' +
                '?' + key).then(function(response){
               		_gifs = response;
               		return _gifs;
               });
		},
		getGif: function(id){
			return $http.get('hhttp://api.giphy.com/v1/gifs/'+id+'?'+key);

		},
		search: function(term){
			return $http.get('http://api.giphy.com/v1/gifs/search?q=' + term +
				'&'+key)
		},
	}
})
.service('giphyService', function gifs($http) {

// config
var key = 'api_key=dc6zaTOxFJmzC',
    limit = 25;



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
