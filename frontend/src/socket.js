import { io } from "socket.io-client";

const socket = io("https://intervue-poiling-assignment-backend.onrender.com"); // Update for prod if hosted

export default socket;
