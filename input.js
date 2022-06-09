const { MESSAGES, MOVEMENT_KEYS } = require("./constants");
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  //snake movement
  if (MOVEMENT_KEYS[key]) {
    connection.write(`${MOVEMENT_KEYS[key]}`);
  }

  //canned messages
  if (MESSAGES[key]) {
    connection.write(`Say: ${MESSAGES[key]}`);
  }
};

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  
  return stdin;
};

module.exports = {
  setupInput
};

