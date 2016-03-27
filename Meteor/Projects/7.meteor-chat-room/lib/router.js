Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function () {

  this.route('index', {
    path: '/',
    template: 'index'
  });

});
