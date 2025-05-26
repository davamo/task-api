const app = require("./app");
const http = require("http");
const { Server } = require("socket.io");
const initRoutes = require("./routes/tasks");
const socketHandler = require("./sockets/socketHandler");

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

app.set("io", io); 
socketHandler(io);

app.use("/tasks", initRoutes(io));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
