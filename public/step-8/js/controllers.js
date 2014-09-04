angular.module('controllers.feed', [])
  .controller('FeedController', ['$scope', 'feedFactory', function(scope, feeder) {
    scope.feed = [];

    var init = function() {
        feeder.getFeed.success(function(data) {
            scope.feed = data;
         });

    };

    init();

    scope.newComment = '';
    scope.addComment = function(comment, i) {
      scope.feed[i].comments.push(comment);
      scope.newComment = '';
    };
}]);

angular.module('controllers.users', [])
  .controller('UsersController', ['$scope', 'feedFactory', function(scope, feeder) {
    scope.users = [];

    var init = function() {
        feederFactory.getUsers.success(function(data) {
            scope.users = data;
         });

    };

    init();
}]);
