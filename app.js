const express = require('express');
// const cors = require('cors');
const path = require('path');
const config = require('./config/config');

const app = express();

// const authRoute = require('./routes/auth.routes');

// config(app);
// const corsOptions = {
//   origin: ['http://localhost:3000'],
//   credentials: true,
// };

// app.use(cors(corsOptions));

// Обработка статических ресурсов
app.use(express.static(path.join(__dirname, 'img')));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server's listening on port ${PORT}`);
});
