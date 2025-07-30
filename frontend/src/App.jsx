import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });
  // const [inputData, setInputData] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setUser((prev) => {
      // console.log(prev);
      return { ...prev, [name]: value };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const age = parseInt(user.age, 10);

    // ตรวจสอบข้อมูล
    if (!user.firstname || !user.lastname || !user.age) {
      alert("Please fill in all fields.");
      return;
    }

    if (
      typeof user.firstname !== "string" ||
      typeof user.lastname !== "string"
    ) {
      alert("Please fill firstname and lastname with valid strings.");
      return;
    }

    if (isNaN(age)) {
      alert("Please fill age with a valid number.");
      return;
    }

    if (!user.firstname || !user.lastname || !user.age) {
      alert("Please fill in all fields.");
      return;
    } else if (
      typeof user.firstname !== "string" ||
      typeof user.lastname !== "string"
    ) {
      alert("Please fill firstname with string.");
      return;
    } else if (isNaN(age)) {
      alert("Please fill age with a valid number.");
      return;
    }
    const response = await axios.post("http://localhost:3000/submit", user);
    console.log(response.data.message);
    setUser({
      firstname: "",
      lastname: "",
      age: "",
    });
  }

  return (
    <div>
      <section className="flex flex-row justify-center h-10 items-center my-4">
        <h1 className="text-xl font-bold underline decoration-solid">
          Please give us your info
        </h1>
      </section>
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
            value={user.firstname}
          />
          <label htmlFor="lastname">lastname:</label>
          <input
            className="bg-white rounded-full py-1 px-6 border"
            onChange={handleChange}
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Lastname"
            value={user.lastname}
          />
          <label htmlFor="age">age:</label>

          <input
            className="bg-white rounded-full py-1 px-6 border"
            onChange={handleChange}
            id="age"
            name="age"
            type="text"
            placeholder="age"
            value={user.age}
          />
          <button
            className="bg-blue-400 rounded-full py-1 mx-10 mt-4 mb-1 hover:bg-blue-600 border"
            type="submit"
          >
            submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
