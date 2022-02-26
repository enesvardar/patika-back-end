const express = require('express');

const app = express();

app.get('/', (res, req) => {
  res.send('index sayfası');
});

const port = 3000;

app.listen(port, () => {
  console.log('App started on port %d', port);
});
