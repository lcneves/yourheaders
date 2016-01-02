var PORT = process.env.PORT || 8080,
    express = require('express'),
    app = express();

app.get('/', function (req, res) {
    res.send({
        ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    });
});

app.listen(PORT, function() {
    console.log('Start listening on port ' + PORT);
});
