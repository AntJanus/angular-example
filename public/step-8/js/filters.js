angular.module('filter.markdown', [])
  .filter('markdown', function() {
        var converter = new Showdown.converter();
        return function(input) {
            var html = converter.makeHtml(input || '');
            return html;
        }
});

angular.module('filter.trust', [])
  .filter('trust', ['$sce', function(sce) {
        return function(input) {
            return sce.trustAsHtml(input || '');
        }
}]);

