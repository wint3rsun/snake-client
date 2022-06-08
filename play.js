const net = require("net");

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  //interpret incoming data as text
  conn.setEncoding("utf-8");

  return conn;
};

connect()
.on("connect", () => {
  console.log("You have successfully connected");
})
.on("data", (data) => {
  console.log(data);
})

