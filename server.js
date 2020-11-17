const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.static(`${__dirname}/static`));


app.use('/', function (request, response) {
    response.send('<h1>Главная страница</h1>')
  })

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 