import React from "react";

function CardInfo(props) {
  return (
    <li className="w-full max-w-xl rounded-2xl shadow-md bg-white m-2">
      <div className="flex flex-col">
        {/* Header Section: Name */}
        <h1 className="bg-green-500 p-4 text-white font-bold text-2xl rounded-t-2xl">
          {props.firstname} {props.lastname}
        </h1>

        {/* Age Section */}
        <p className=" text-lg text-gray-800 p-2 m-2 h-xl">
          <strong>Age: </strong>
          {props.age}
        </p>
      </div>
    </li>
  );
}

export default CardInfo;
