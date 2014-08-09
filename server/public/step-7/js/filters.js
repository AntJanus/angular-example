app.filter('markdown', function() {
        var converter = new Showdown.converter();
        return function(input) {
            var html = converter.makeHtml(input || '');
            return html;
        }
});

app.filter('trust', function($sce) {
        return function(input) {
            return $sce.trustAsHtml(input || '');
        }
});

