const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const items = [
  {
    users_id: 1,
    items_id: 1,
    title: 'MacBookPro',
    image_url: './img/macbookpro.png ',
    description: 'mac book pro 13in with catalina',
    search_tags: ['mac', 'Laptop', 'computers'],
  },
  {
    users_id: 2,
    items_id: 2,
    title: 'MacBook',
    image_url: './img/macbookpro.png ',
    description: 'mac book  15in with catalina',
    search_tags: ['mac', 'Laptop', 'computers'],
  },
  {
    users_id: 3,
    items_id: 3,
    title: 'iPhone X',
    image_url: './img/iphonex.png ',
    description: 'i phone x 128gb',
    search_tags: ['apple', 'phone', 'iphone'],
  },
  {
    users_id: 4,
    items_id: 4,
    title: 'iPad',
    image_url: './img/ipad.png ',
    description: 'apple iPad ',
    search_tags: ['ipad', 'tablet', 'apple'],
  },
  {
    users_id: 5,
    items_id: 5,
    title: 'MacBookPro',
    image_url: './img/macbookpro17.png ',
    description: 'mac book pro 17in with catalina',
    search_tags: ['mac', 'Laptop', 'computers'],
  },
];

app.get('/api/items', (req, res) => {
  res.send(items);
});

app.get('/api/items/:id', (req, res) => {
  const item = items.filter((item) => item.id.toString() === req.params.id)[0];
  res.status(200).json(item);
});

app.post('/api/items', (req, res) => {
  if (req.body.id !== undefined) items.push(req.body);
  res.status(201).json(items);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
