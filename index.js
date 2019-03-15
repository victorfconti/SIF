const express = require('express');
const path = require('path');
const app = express();
 
app.use(express.static(`${__dirname}/img`));
app.use(express.static(`${__dirname}/js`));
app.use(express.static(`${__dirname}/mail`));
app.use(express.static(`${__dirname}/vendor`));
 
app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/index.html`));
});
 
app.listen(process.env.PORT || 8080);