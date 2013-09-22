require.config({
    paths: {
        jquery: 'libs/jquery-1.10.2.min',
        jqueryui: 'libs/jquery-ui-1.10.3.min',
        json2: 'libs/json2',
        underscore: 'libs/underscore-min', // 1.5.2
        backbone: 'libs/backbone', // 1.0.0
        marionette: 'libs/backbone.marionette', // 1.0.0
        supermodel: 'libs/supermodel',
        handlebars: 'libs/handlebars',
        text: 'libs/text',
        hbars: 'libs/hbars',
    },
    shim: {
        underscore: { exports: '_' },
        json2: { exports: 'JSON' },
        backbone: {
            deps: ['underscore', 'jquery', 'json2'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        supermodel: {
            deps: ['backbone'],
            exports: 'Supermodel'
        },
        handlebars: { exports: 'Handlebars'}
    }
});

require([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'tinseltown',
    'control/router',
    'control/controller'
], function($, _, Backbone, Marionette, Tinseltown, Router, Controller) {

    Tinseltown.addInitializer(function() {
        var controller = new Controller();
        this.router = new Router({controller: controller});
        this.main.show(controller.main);
    });

    Tinseltown.addInitializer(function() {
        Backbone.history.start({ pushState: true, hashChange: false });
    });

    Tinseltown.start();
});
