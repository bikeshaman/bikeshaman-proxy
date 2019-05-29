const path = require('path');

const express = require('express');

const app = express();
app.use(express.json());
app.use('/buying-zone', express.static(path.join(__dirname, '../buying-zone/client/dist')));

app.listen(process.env.PORT || 2000);

const { Product } = require('../buying-zone/database/db');
const template = require('./template');

/**
 * Gets the product associated with the id passed in the url. Sends the retrieved product back as
 * JSON.
 * @param {number} id - The product's human-readable id (think model number)
 * @returns {Product} - Sends the queried product back in the response
 */
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    let product = await Product.findOne({ id });
    product = JSON.stringify(product);
    const response = template({ product });
    res.send(response);
  } catch (err) {
    // TODO: improve error handling
    res.sendStatus(400);
  }
});
