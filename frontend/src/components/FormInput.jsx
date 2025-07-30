import React, { useState } from "react";

function FormInput(props) {
  // แก้ไข useState เป็น object แทน array
  const [inputData, setInputData] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });

  // ฟังก์ชัน handleChange
  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  // ฟังก์ชัน handleSubmit
  function handleSubmit(event) {
    event.preventDefault();
    // ส่งข้อมูลไปยัง props.onSubmit เมื่อผู้ใช้กด submit
    props.onSubmit(inputData);
    setInputData({
      firstname: "",
      lastname: "",
      age: "",
    });
  }

  return (
    <section className="flex flex-col items-center">
      <form
        className="flex flex-col bg-amber-100 p-4 gap-2 rounded-xl border shadow-xl"
        onSubmit={handleSubmit}
      >
        <label htmlFor="firstname">Firstname:</label>
        <input
          className="bg-white rounded-full py-1 px-6 border"
          onChange={handleChange}
          id="firstname"
          name="firstname"
          type="text"
          placeholder="Firstname"
          value={inputData.firstname}
        />
        <label htmlFor="lastname">Lastname:</label>
        <input
          className="bg-white rounded-full py-1 px-6 border"
          onChange={handleChange}
          id="lastname"
          name="lastname"
          type="text"
          placeholder="Lastname"
          value={inputData.lastname}
        />
        <label htmlFor="age">Age:</label>
        <input
          className="bg-white rounded-full py-1 px-6 border"
          onChange={handleChange}
          id="age"
          name="age"
          type="text"
          placeholder="Age"
          value={inputData.age}
        />
        <button
          className="bg-blue-400 rounded-full py-1 mx-10 mt-4 mb-1 hover:bg-blue-600 border"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default FormInput;
