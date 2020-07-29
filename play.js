const net = require('net');

//This will establish connection to the game server

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');

  //Handles message sent to client from server 
    //In this case, when you idle, it tells you, you died
  conn.on('data', (data) => {
    console.log('You died because you idled');
  });

  return conn;
}

console.log('Connecting ...');
connect();