const { stdin } = require("process");
const conn = require("./client");

conn.connect();

//setup interface to handle user input from stdin

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  
  return stdin;
};

setupInput();
