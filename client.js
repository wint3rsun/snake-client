const net = require("net");
const { IP, PORT, USRNAME } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    console.log("You have successfully connected to the game server");
    conn.write(`Name: ${USRNAME}`);  
  })
  .on("data", (data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = {
  connect
};