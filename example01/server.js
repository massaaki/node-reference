const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const globalMiddelware = require('./src/middlewares/globalMiddleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(globalMiddelware);
app.use(routes);


app.listen(3000); 