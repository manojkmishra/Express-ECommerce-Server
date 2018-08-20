import express from 'express';
import middlewaresConfig from './config/middlewares';
import './config/db';

const app = express();
middlewaresConfig(app);

app.get('/', (req, res) => 
{  res.send('/src/index.js--Welcome');
});

app.listen(3000, err => 
{ if (err) { console.error('/src/index.js-error=',err);  } 
  else {    console.log(`/src/index.js--Server listen on port 3000`);  }
});