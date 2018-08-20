import express from 'express';

const app = express();

app.get('/', (req, res) => 
{  res.send('Welcome');
});

app.listen(3000, err => 
{ if (err) { console.error('/src/index.js-error=',err);  } 
  else {    console.log(`/src/index.js--Server listen on port 3000`);  }
});