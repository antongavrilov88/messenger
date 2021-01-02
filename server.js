const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.static(`${__dirname}/static`));

app.use('/', express.static(`${__dirname}/static/index.html`));
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/static/index.html`);
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 