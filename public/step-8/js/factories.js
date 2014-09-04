angular.module('factory.feed', [])
  .factory('feedFactory', ['$http', function(http) {
    return {
        getFeed: http.get('/api/feed'),
        getUsers: http.get('/api/users')
    };
}]);
