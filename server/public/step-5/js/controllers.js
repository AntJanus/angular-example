app.controller('FeedController', function($scope, feedFactory) {
    $scope.feed = [];

    var init = function() {
        feedFactory.getFeed.success(function(data) {
            $scope.feed = data;
         });

    };

    init();
});
