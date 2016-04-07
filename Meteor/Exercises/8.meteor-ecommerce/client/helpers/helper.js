UI.registerHelper(name, function(route){
  return Session.equals('currentRoute', route) ? 'active' : '';
});
