app.directive('commentForm', function() {
  return {
        restrict: 'A',
        template: '<form class="form-vertical" ng-submit="addComment()">' +
                   '<div class="form-group">' +
                      '<textarea class="fill" ng-model="comment"></textarea>' +
                   '</div>' +
                  '<div class="form-group">' +
                      '<input type="submit" class="button main block">' +
                  '</div>' +
                '</form>',
        scope: {
          onAddComment: '&',
          comment: '='
        },
        replace: true,
        link: function (scope, elem, attrs) {
          scope.comment = '';

          scope.addComment = function(){
            scope.onAddComment(scope.comment);
            scope.comment = '';
          }

        }
      }

});
