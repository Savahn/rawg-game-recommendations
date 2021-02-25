import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import { config } from 'dotenv';

import gamesRoutes from './routes/games.js';

config();

// API initialization
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// API Routes
app.use('/games', gamesRoutes);

app.use('/', (req, res) =>
  res.send(
    `
  <h1>
    RAWG Game Collection Server
  </h1>
  <br />
  <br />
  <p>Open <a href="http://localhost:5000/games">http://localhost:5000/games</a> to try it</p>
  `
  )
);

// TODO: Use Environment variable
const { CONNECTION_URL, PORT } = process.env;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch(error => console.log(error.message));

mongoose.set('useFindAndModify', false);
