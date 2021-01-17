const express = require('express');

const app = express();
const PORT = 80;

app.use(express.static(`${__dirname}/dist`));

app.use('/', express.static(`${__dirname}/dist/index.html`));
app.get('*', (req, res) => {
	res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}!`);
});
