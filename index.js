import express, { json } from "express";
import cors from "cors";
import { authHandler } from "./controllers/auth.js";
import { createOrder } from "./controllers/order.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(
  json({
    strict: true,
  })
);

app.get("/notify", async (req, res) => {
  console.log(req.query);
  res.send({
    path: "GET /notify",
    data: req.query,
  });
});
app.post("/notify", async (req, res) => {
  console.log(req.body);
  res.send({
    path: "POST /notify",
    data: req.body,
  });
});

app.post("/orders", createOrder);
app.post("/auth", authHandler);

app.listen(3000, () => {
  console.log("server started on port 3000...");
});
