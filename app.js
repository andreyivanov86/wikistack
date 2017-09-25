const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');
const models = require('./models')

// templating boilerplate setup
const env = nunjucks.configure('views', { noCache: true }); // where to find the views, caching off
app.set('view engine', 'html'); // what file extension do our templates have
app.engine('html', nunjucks.render); // how to render html templates
// body parsing setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
// static foler for styles.css
app.use(express.static(path.join(__dirname, '/public')));
// routes
app.use('/', routes);

models.db.sync({})
  .then(function() {
    app.listen(3000, function(){
      console.log('Listening on port 3000 ...')
    });
  })
  .catch(console.error);
