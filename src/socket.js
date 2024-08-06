import { io } from "socket.io-client";
const URL = process.env.NODE_ENV === 'production' ? 'https://jscafe-sketchbook-server.onrender.com' : 'http://localhost:5000'


let socket;

const connectSocket = () => {
  socket = io(URL);
  console.log(socket)
} // Add this -- our server will run on port 3001, so we connect to it from here

export {socket, connectSocket};