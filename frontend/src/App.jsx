import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { use } from "react";

function App() {
  const [data, setData] = useState("");
  const [inputData, setInputData] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const response = await axios.post("http://localhost:3000/add-data", {
          data: inputData,
        });
        // console.log("Response from backend:", response.data);
        setResponseMessage(response.data);
        setInputData(""); // Clear input field after submission
      } catch (error) {
        console.error("Error posting data:", error);
      }
    };

    postData();
  };

  return (
    <div>
      <h1>Data from Backend:</h1>
      <p>{data}</p>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter new data"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {responseMessage && (
        <div>
          <h2>Response from Backend:</h2>
          <p>{responseMessage}</p>
        </div>
      )}
    </div> 
  );
}

export default App;
