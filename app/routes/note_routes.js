module.exports = function(app, db) {
  app.post('/notes', function(req, res) {
    //note creation happens here
    console.log(req.body);
    res.send('hello');
  });
};
