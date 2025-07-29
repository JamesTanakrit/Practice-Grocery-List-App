import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FormData from "./components/FormData";
import Footer from "./components/Footer";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      firstname: "",
      lastname: "",
      age: "",
    });
    // สามารถทำการส่งข้อมูลไปยัง Backend ได้ที่นี่
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex justify-center items-center flex-grow shadow-xl">
        <FormData
          formData={formData} // ส่ง state formData ไปที่ FormData
          handleChange={handleChange} // ส่ง handleChange ไปที่ FormData
          handleSubmit={handleSubmit} // ส่ง handleSubmit ไปที่ FormData
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
