const { Console } = require("console");
const express = require ("express");
const {Server: HTTPServer} = require ("http");
const {Server:SocketServer } = require ("socket.io");

const app =express();
const httpServer = new HTTPServer(app);
const socketServer = new SocketServer(httpServer);

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
});

socketServer.on("connection",(socket)=>{
    console.log('nuevo client conectado');
    socketServer.emit("INIT","Bienvenido al WebSocket")
})

const PORT = process.env.PORT || 3000
httpServer.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
});