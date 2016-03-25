Router.map(function () {

  // By default, path = '/about', template = 'about'
  this.route('about');

  // path = '/', template = 'home'
  this.route('home', {
    path: '/',  //overrides the default '/home'
  });

  // path = '/articles', template = 'articles'
  this.route('articles', {
    // set template data context
    data: function () {
      return Articles.find()
    }
  });

  // path = '//article/:_id', template = 'fullArticle'
  this.route('article', {
    path: '/article/:_id',
    template: 'fullArticle',
    data: function () {
      return Articles.findOne({_id: this.params._id})
    }
  });

});
