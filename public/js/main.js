//Cliente WebSocket
const socket =io();

socket.on("connect",()=>{
    console.log("conectado al servidor")
});

socket.on("INIT",(msg)=>{
    alert(msg);
})