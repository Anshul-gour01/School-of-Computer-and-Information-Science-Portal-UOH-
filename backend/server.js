import Express from "express";
import Mongoose from "mongoose";
import Dotenv from "dotenv";
import Cors from "cors";
import { createServer as CreateServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import { router as NotificationsRouter } from "./routes/notifications.js"; // Named import for router

Dotenv.config();

const App = Express();
const HttpServer = CreateServer(App);
const Io = new SocketIOServer(HttpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

App.set("io", Io);

App.use(Cors());
App.use(Express.json());

const MongoURI = process.env.MONGO_URI;
Mongoose.connect(MongoURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((Err) => console.error("MongoDB connection error:", Err));

App.use("/api/notifications", NotificationsRouter);

const Port = process.env.PORT || 3000;
HttpServer.listen(Port, () => {
  console.log(`Server started on port ${Port}`);
});
