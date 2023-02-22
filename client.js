const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address from constants,
    port: PORT  // PORT number from constants,
  });
  //message after successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
  });
  //sending message to the server
  conn.on("connect", () => {
    conn.write("Hello from client!");
  });
  //sending our initials to the server
  conn.on("connect", () => {
    conn.write("Name: MGA");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  return conn;
};

module.exports = { connect };