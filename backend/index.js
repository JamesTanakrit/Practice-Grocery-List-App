import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("conecting frontend");
  res.send({ message: "Connected successfully!" });
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send({ message: "Data received successfully!" });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
