const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

app.use(morgan('dev'));

app.listen(3000, function(){
  console.log('Listening...')
});
