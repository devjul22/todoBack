const express = require('express');
require('dotenv').config();
const cors = require('cors');
// const path = require('path');
const config = require('./config/config');

const app = express();

const carRoute = require('./routes/car.routes');


config(app);
const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use('/api/cars', carRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server's listening on port ${PORT}`);
});
