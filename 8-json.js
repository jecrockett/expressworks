var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(req, res){
  var query = process.argv[3];
  fs.readFile(query, function(error, data){
    if (error) return res.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (error) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])
