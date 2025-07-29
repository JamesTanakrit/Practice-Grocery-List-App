import React from "react";

function FormData(props) {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        User Information
      </h2>

      <form onSubmit={props.handleSubmit} className="space-y-4">
        {/* Firstname Input */}
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          value={props.formData.firstname}
          onChange={props.handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Lastname Input */}
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={props.formData.lastname}
          onChange={props.handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Age Input */}
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={props.formData.age}
          onChange={props.handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormData;
