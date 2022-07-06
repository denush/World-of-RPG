const http = require("http");
const fs = require("fs");

const PORT = 9000;
const HOST = "127.0.0.1";
const onStart = () => console.log(`server has start on ${HOST}:${PORT}`);

const server = http.createServer((request, response) => {

  
  response.end("World of RPG");
});

server.listen(PORT, HOST, onStart);
