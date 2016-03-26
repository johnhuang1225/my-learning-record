var path = require('path'),
    routes = require('./routes'),
    // This is the templating engine we are going to use with the views.
    exphbs = require('express-handlebars'),
    express = require('express'),
    // This helps facilitate the packing of any form fields that are submitted via a HTML form submission from a browser.
    bodyParser = require('body-parser'),
    // This allows cookies to be sent and received.
    cookieParser = require('cookie-parser'),
    // This is the module responsible for logging. This is very helpful for debugging your Node server
    morgan = require('morgan'),
    // For older browsers that don't properly support REST HTTP verbs, such as UPDATE and PUT, the methodOverride middleware allows this to be faked using a special hidden input field.
    methodOverride = require('method-override'),
    // This handles any errors that occur throughout the entire middleware process.
    errorHandler = require('errorhandler'),
    moment = require('moment'),
    multer = require('multer');

module.exports = function(app) {
    app.engine('handlebars', exphbs.create({
        defaultLayout: 'main',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials']
    }).engine);
    app.set('view engine', 'handlebars');

    app.use(morgan('dev'));
    app.use(multer({ dest: path.join(__dirname, 'public/upload/temp')}));

    app.use(methodOverride());
    app.use(cookieParser('some-secret-value-here'));
    routes(app);

    app.use('/public/', express.static(path.join(__dirname, '../public')));

    if ('development' === app.get('env')) {
       app.use(errorHandler());
    }

    return app;
};
