app.factory('feedFactory', function($http) {
    return {
        getFeed: $http.get('/api/feed'),
        getUsers: $http.get('/api/users')
    };
});
