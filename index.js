const express = require('express'),
  path = require('path'),
  app = express(),
  cors = require('cors'),
  mysql = require('mysql'),
  bodyParser = require('body-parser');

// setup database
db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'simpleapi'
})

var server = {
  port: 4040
};

// routers
const usersRouter = require('./routes/users');
// use the modules
app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended: true})) // parsing incoming requests with urlencoded based body-parser
// use router
app.use('/users', usersRouter);
// router user input
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname,'views') + '/input.html');
});

app.listen( server.port , () => console.log(`Server started, listening on port: ${server.port}`));
