#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from "../app";
import http from "http";
import mongoose from "mongoose";
require("dotenv").config();
/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT);
app.set("port", port);
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true
});
/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      // eslint-disable-next-line
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      // eslint-disable-next-line
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Listening on " + bind);
}
