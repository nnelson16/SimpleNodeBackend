module.exports = function(app, db) {
  app.post('/notes', function(req, res) {
    //note creation happens here
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').insert(note, function(err, result) {
      if(err) {
        res.send({'error': 'An error has ocurred'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
