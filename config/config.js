const path = require('path');
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

module.exports = function config(app) {
  app.use(logger('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.json());
  app.use(cookieParser());
};
