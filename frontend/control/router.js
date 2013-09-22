define([
    'underscore',
    'marionette'
], function(_, Marionette) {;

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            '/' : 'home'
        }
    });

    return Router;

});
