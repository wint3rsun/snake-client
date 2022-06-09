const { stdin } = require("process");
const { connect } = require("./client");
const { setupInput } = require("./input");

let conn = connect();
setupInput(conn);
