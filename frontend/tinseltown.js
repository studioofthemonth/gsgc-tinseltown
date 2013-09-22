define([
    'backbone',
    'marionette'
], function(Backbone, Marionette) {

    var Tinseltown = new Marionette.Application();

    Tinseltown.addRegions({
        main: 'body'
    });

    return Tinseltown;

});
