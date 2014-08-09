app.controller('FeedController', function($scope, feedFactory) {
    $scope.feed = [];

    var init = function() {
        feedFactory.getFeed.success(function(data) {
            $scope.feed = data;
         });

    };

    init();

    $scope.newComment = '';
    $scope.addComment = function(comment, i) {
      $scope.feed[i].comments.push(comment);
      $scope.newComment = '';
    };
});

app.controller('UsersController', function($scope, feedFactory) {
    $scope.users = [];

    var init = function() {
        feedFactory.getUsers.success(function(data) {
            $scope.users = data;
         });

    };

    init();
});
