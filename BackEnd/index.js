const express = require('express');
const products = require('./data');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/products', async (req, res) => {
  res.send(products);
});

app.listen(4500, () => console.log('app running on 4500'));
