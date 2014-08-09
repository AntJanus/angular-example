app.factory('feedFactory', function($http) {
    return {
        getFeed: $http.get('/api/feed')
    };
});
