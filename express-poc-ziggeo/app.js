var express = require('express');
var cors = require('cors');
var logger = require('morgan');
var app = express();

// Basic Setup for Express App

app.set('port', process.env.PORT || 3001); // Set Port to 3001
app.use(cors()); // Use Cors to accept Axios requests
app.use(logger('dev')); // Log Activity in console


const Ziggeo = require ('ziggeo');
var ZiggeoSdk = new Ziggeo('a293c346773385bae50fb960f2210d2d', '6d3446268b3963e436a47dc652e0f353', 'af4ac1f13cdb963218a70d221557eeb4'); // api_key, private_key, encryption_key Find in Dashboard


app.get('/video-list', function(req, res) {
  ZiggeoSdk.Videos.index({limit: 100}, {
    success: index => res.send(index) // On Success, respond with Video List (index)
  })
})

app.listen(app.get('port'), () => {

  console.log('Express server listening on port ' + app.get('port'))

});

