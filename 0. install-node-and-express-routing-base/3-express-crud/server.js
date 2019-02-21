const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  

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

// добавление
app.post('artists', function(req, res) {
  var artist = {
    id: Date.now(),
    name: req.body.name
  };

  artists.push(artist);
  res.send(artist);  
})

// обновление
app.put('artists/:id', function(req, res) {
  var artist = artsts.find(function(artist) {
    return artist.id === Number(req.params.id);
  });

  artist.name = req.body.name;
  res.sendStatus(200);
});

// удаление
app.delete('artists/:id', function(req, res) {
  artists = artsts.filter(function(artist) {
    return artist.id !== Number(req.params.id);
  });

  res.sendStatus(200);
})

app.listen(3000, function() {
  console.log('app listening on port 3000');
});
