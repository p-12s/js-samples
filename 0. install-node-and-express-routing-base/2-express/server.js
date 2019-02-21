const express = require('express');

var app = express();

var artsts = [
  {
    id: 1,
    name: 'Maria'
  },
  {
    id: 2,
    name: 'Ray'
  },
  {
    id: 3,
    name: 'Frey'
  }
];

app.get('/', function(req, res) {
  res.send('Hi, API!')
});

app.get('/artists', function(req, res) {
  res.send(artsts);
});

app.get('/artists/:id', function(req, res) {
  var artist = artsts.find(function(artist) {
    return artist.id === Number(req.params.id);
  })
  res.send(artist);
});

app.listen(3000, function() {
  console.log('app listening on port 3000');
});
