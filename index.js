const express = require('express');
const app = express();
const path = require('path');
const public = path.join(__dirname, 'public');
const router = require('./routes/routes');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(public));

app.engine('mustache', mustache());

app.set('view engine', 'mustache');

app.use('/', router);

app.listen(3000, () => {
    console.log('Server started on port 3000. Ctrl^ to quit.');
})

