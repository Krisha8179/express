const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in the middleware');
    next();
});

app.use((req, res, next) => {
    console.log('in the second middleware');
    res.send('<h1>Hello Express</h1>');
});
    

app.listen(4000);

