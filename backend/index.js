import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000;

app.get("/data", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.post("/add-data", (req, res) => {
  const newData = req.body.data;
  console.log("Received data:", newData);
  res.send(`Data received: ${newData}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
