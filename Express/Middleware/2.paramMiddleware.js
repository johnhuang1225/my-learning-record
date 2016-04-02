var myMiddleware = function (param) {
  if (param === 'A') {
    return function(req, res, next) { // <---Middleware A
      // Do A stuff
      return next();
    }
  } else {
    return function(req, res, next) { // The default middleware
      // Do default stuff
      return next();
    }
  }
}
