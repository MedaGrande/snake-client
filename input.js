const { moveUp, moveDown, moveRight, moveLeft } = require("./constants");

// setup interface to handle user input from stdin
let connection;
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;
  return stdin;
};

//assign keys to send to the server
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit(); //control + c to exit
  } //WASD keys to control our snake
  if (key === 'w') {
    connection.write(moveUp);
  } else if (key === 'a') {
    connection.write(moveLeft);
  } else if (key === 's') {
    connection.write(moveDown);
  } else if (key === 'd') {
    connection.write(moveRight);
    //message to fellow players
  } else if (key === 'z') {
    connection.write("Say: Still tiny!?");
  } else if (key === 'm') {
    connection.write("Say: First time playing!?");
  } else if (key === 'o') {
    connection.write("Say: Need some AIR!?");
  }
};

module.exports = { setupInput };