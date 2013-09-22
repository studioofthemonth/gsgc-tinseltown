define([
    'marionette',
    'tinseltown',
    'layouts/main_layout'
], function(Marionette, Tinseltown, MainLayout) {

    var MainController = Marionette.Controller.extend({
        initialize: function() {
            this.main = new MainLayout();
        },

        home: function() {
            console.log('home');
        }
    });

    return MainController;

});
