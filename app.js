const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const routes = require('./routes');

// templating boilerplate setup
// const env = nunjucks.configure('views', { noCache: true }); // where to find the views, caching off
// app.set('view engine', 'html'); // what file extension do our templates have
// app.engine('html', nunjucks.render); // how to render html templates

app.use(morgan('dev'));

app.use('/', routes);

const server = app.listen(3000, function(){
  console.log('Listening...')
});
