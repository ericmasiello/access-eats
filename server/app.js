const express = require('express');
const bodyParser = require('body-parser');
const restaurantService = require('./services/restaurantService');

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/../build'));
app.set('views', __dirname + '/../build');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const api = express.Router();

api.get('/restaruants', async (req, res) => {
  try {
    const data = await restaurantService.load();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

api.post('/restaruants', async (req, res) => {
  try {
    const result = await restaurantService.create(req.body);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
});

app.use('/api', api);

app.use('/', (req, res) => {
  res.render('index.html');
});

module.exports = app;
