const express = require('express');
const route = express.Router();


function someMiddleware(req, res, next) {
  console.log('some Middleware');
  next();
}

const homeController = require('./src/controllers/homeController');
route.get('/',someMiddleware, homeController.homePage);




module.exports = route;