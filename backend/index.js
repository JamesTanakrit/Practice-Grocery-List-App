import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import fs from "fs";

import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import { log } from "console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/data", (req, res) => {
  const dataFilePath = path.join(__dirname, "mock", "data.json");
  // console.log("conecting frontend");
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Internal server error");
    }

    let jsonData = [];
    if (data) {
      jsonData = JSON.parse(data); // แปลงข้อมูลที่อ่านจากไฟล์เป็น JSON
    }
    res.send(jsonData);
  });
});

app.post("/submit", (req, res) => {
  const userData = req.body; // รับข้อมูลจาก frontend
  const dataFilePath = path.join(__dirname, "mock", "data.json");

  // อ่านข้อมูลเก่าจากไฟล์ data.json
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Internal server error");
    }

    let jsonData = [];
    if (data) {
      jsonData = JSON.parse(data); // แปลงข้อมูลที่อ่านจากไฟล์เป็น JSON
    }

    // เพิ่มข้อมูลใหม่ที่ได้รับจาก frontend ไปใน jsonData
    jsonData.push(userData);

    // เขียนข้อมูลใหม่กลับไปที่ data.json
    fs.writeFile(dataFilePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).send("Internal server error");
      }

      res.send({ message: "Data received and saved successfully!" });
    });
  });
});

app.delete("/delete-post/:id", (req, res) => {
  const { id } = req.params;
  const dataFilePath = path.join(__dirname, "mock", "data.json");
  // console.log(id);
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Internal server error");
    }

    let jsonData = [];
    if (data) {
      jsonData = JSON.parse(data); // แปลงข้อมูลที่อ่านจากไฟล์เป็น JSON
    }

    // console.log(jsonData);
    jsonData = jsonData.filter((_, index) => {
      return index !== parseInt(id);
    });

    fs.writeFile(dataFilePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).send("Internal server error");
      }

      res.send({ message: "Delete Data successfully!" });
    });
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
