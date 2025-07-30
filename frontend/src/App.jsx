import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CardInfo from "./components/CardInfo";
import FormInput from "./components/FormInput";

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/data");
      const result = response.data;
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // ฟังก์ชัน handleSubmit ที่ส่งไปที่ FormInput
  async function handleSubmit(userData) {
    console.log(userData);

    const age = parseInt(userData.age, 10);

    // ตรวจสอบข้อมูล
    if (!userData.firstname || !userData.lastname || !userData.age) {
      alert("Please fill in all fields.");
      return;
    }

    if (
      typeof userData.firstname !== "string" ||
      typeof userData.lastname !== "string"
    ) {
      alert("Please fill firstname and lastname with valid strings.");
      return;
    }

    if (isNaN(age)) {
      alert("Please fill age with a valid number.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/submit",
        userData
      );
      console.log(response.data.message);

      fetchData(); // ดึงข้อมูลใหม่จาก backend
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteInfo(id) {
    console.log(id);

    try {
      const response = await axios.delete(
        `http://localhost:3000/delete-post/${id}`
      );
      console.log(response.data.message);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <section className="flex flex-row justify-center h-10 items-center my-4">
        <h1 className="text-xl font-bold underline decoration-solid">
          Please give us your info
        </h1>
      </section>
      {/* ส่ง handleSubmit ให้ FormInput */}
      <FormInput onSubmit={handleSubmit} />

      {/* แสดงข้อมูลจาก Backend */}
      <section className="flex flex-col items-center my-4 ">
        <h2 className="bg-white w-full text-center p-4 text-4xl font-bold mb-4 shadow-md">
          Data from Backend:
        </h2>
        <ul className="grid grid-cols-3 gap-4 w-full justify-items-center">
          {data.map((item, index) => (
            <CardInfo
              key={index}
              id={index}
              firstname={item.firstname}
              lastname={item.lastname}
              age={item.age}
              onClick={deleteInfo}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
