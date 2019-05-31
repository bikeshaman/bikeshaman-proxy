const path = require('path');

const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.listen(process.env.PORT || 3000);

const template = require('./template');

app.get('/:id', (req, res) => {
  const { id } = req.params;
  if (Number(id)) {
    const html = template(req.params);
    res.send(html);
    return;
  }
  res.sendStatus(404);
});
