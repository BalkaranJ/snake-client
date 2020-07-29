const { connect } = require("./client");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function(conn) {  
  stdin.on('data', (key) => {
    if (key === '\u0003') {
       process.exit();
      } else if (key === 'w') {
        conn.write("Move: up");
      } else if (key === 'a' ) {
        conn.write('Move: left');
      } else if (key === 's') {
        conn.write('Move: down');
      } else if (key === 'd') {
        conn.write('Move: right')
      } else if (key === 'h') {
        conn.write('Say: Hello');
      } else if (key === 'j') {
        conn.write('Say: Sup?') 
      } else if (key === 'k') {
        conn.write('Say: GOT YOU! :P')
      }

    });
  }

  handleUserInput(conn);
  return stdin;
}
console.log("w = Move: up");
console.log("a = Move: left");
console.log("s = Move: down");
console.log("d = Move: right");
console.log("If you want to send a message: h = Hello, j = Sup?, k = GOT YOU! :P")
module.exports = {setupInput};