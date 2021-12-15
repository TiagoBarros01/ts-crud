import 'reflect-metadata';
import express from 'express';

const SERVER_PORT = 3000;

import './database'

const app = express();

app.listen(SERVER_PORT, () =>
  console.log(`🔥 Server is running on port ${SERVER_PORT}`)
);
