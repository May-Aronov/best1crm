let express = require('express');
let bodyParser = require('body-parser');
let Api = require('./server/api/clientsApi');




const SERVER_PORT = 8080;

let app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',Api);



// "start": "node scripts/start.js" מחקתי מpackage json בתכונה scripts
app.listen(process.env.PORT || SERVER_PORT);