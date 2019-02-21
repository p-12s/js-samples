const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

var app = express();
var db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  


// получение вс
app.get('/artists', function(req, res) {
  db.collection('artists').find().toArray(function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    };

    res.send(result);
  });
});


app.get('/artists/:id', function(req, res) {
  db.collection('artists').findOne({ _id: ObjectId(req.params.id) }, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    };

    res.send(result);
  });
});

// добавление
app.post('artists', function(req, res) {
  var artist = {
    name: req.body.name
  };

  db.collection('artists').insert(artist, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    };

    res.send(artist);
  });
})

// обновление
app.put('artists/:id', function(req, res) {
  db.collection('artists').updateOne(
    { _id: ObjectId(req.params.id) },
    { name: req.body.name },
    function(err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      };

      return res.sendStatus(200);
    }
  );
});

// удаление
app.delete('artists/:id', function(req, res) {
  db.collection('artists').deleteOne(
    { _id: ObjectId(req.params.id) },
    function(err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      };

      return res.sendStatus(200);
    }
  );
});

MongoClient.connect('mongodb://localhost:27017/artists', { useNewUrlParser: true }, function(err, client) {
  if (err) {
    console.log(err);
    return res.sendStatus(500);
  };

  db = client.db('artists');
  console.log("Connected successfully to server");

  app.listen(3000, function() {
    console.log('app listening on port 3000');
  });
});

