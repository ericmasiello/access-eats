const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/../build'));
app.set('views', __dirname + '/../build');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const api = express.Router();

api.get('/restaruants', (req, res) => {
  res.json([{
    foo: 'bar',
  }, {
    bar: 'baz',
  }, {
    baz: 'raz',
  }]);
});

api.post('/restaruants', (req, res) => {
  console.log('posting...');
  res.json({
    bar: 'baz',
  });
});

app.use('/api', api);

app.use('/', (req, res) => {
  res.render('index.html');
});

module.exports = app;
