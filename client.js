const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541  // PORT number here,
  });
  //message after successful connection
  conn.on("connect", (data) => {
    console.log("Successfully connected to game server!");
  });

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

console.log("Connecting ...");
connect();

module.exports = connect;