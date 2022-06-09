const { stdin } = require("process");
const { connect } = require("./client");
const { setupInput } = require("./input");

connect();
setupInput();
