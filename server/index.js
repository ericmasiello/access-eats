const app = require('./app');

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`Server listening at: http://localhost:${PORT}`);
});
