const http = require("http");
const express = require("express");
const { controller_v1 } = require("./controllers");
const config = require("../config");

const app = express();
const PORT = config.server.PORT;

/**
 * @author Karl-Johan Bailey
 * @created 15/12/2022
 */

server = http.createServer(app);

// Middlewares

app.use("/api/v1", controller_v1.call({ express, app }));

// Listener

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
