define([
    'marionette',
    'tinseltown',
    'hbars!templates/layouts/main'
], function(Marionette, Tinseltown, MainTemplate) {

    var MainLayout = Marionette.Layout.extend({
        template: MainTemplate,

        regions: {
            // header: '#header',
            // loadbar: '#loadbar',
            // spark: '#spark',
            // container: '#container',
            // nav: '#nav',
            // breadcrumbCrumbs: '.breadcrumbs .crumbs',
            // content: '#content',
            // modal: '#modal'
        },

        onShow: function() {
            console.log('hello');
        }
    });

    return MainLayout;

});
