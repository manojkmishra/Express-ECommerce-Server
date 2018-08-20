import morgan from 'morgan'; //HTTP request logger middleware for node.js
import express from 'express';

import { isDev } from '../constants';

export default app => {
  app.use(morgan(isDev ? 'dev' : 'common'));
  app.use(express.json());
};