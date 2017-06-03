var express = require('express'),
    app = express(),
    klocka = require('klocka'),
    cats = require('./routes/cats');

app.use(klocka);
app.use('/cats', cats);

app.listen(3000);
