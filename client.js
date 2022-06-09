const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541',
  });

  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    console.log("You have successfully connected to the game server");
    conn.write("Name: AAA");  
  })
  .on("data", (data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = {
  connect
};