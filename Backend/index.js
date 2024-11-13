var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');  
var socketIo = require('socket.io'); 
var cors = require('cors');  
var app = express();

const publicPath = path.join(__dirname, './public');
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true  
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicPath));
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'],
    credentials: true  
  }
});

var { bind } = require('./communication/communication');
var sockets = [], users = [];

// Bind sockets
bind(io, sockets, users);

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
