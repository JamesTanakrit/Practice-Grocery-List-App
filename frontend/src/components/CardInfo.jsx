import React from "react";

function CardInfo(props) {
  return (
    <li className="w-full max-w-xl rounded-2xl shadow-md bg-white m-2">
      <div className="flex flex-col">
        {/* Header Section: Name */}
        <div className="flex flex-row bg-green-500 p-4  rounded-t-2xl justify-between">
          <h1 className="text-white font-bold text-2xl">
            {props.firstname} {props.lastname}
          </h1>
          <button onClick={() => props.onClick(props.id)} type="button">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white hover:bg-red-600 rounded-full transition"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          </button>
        </div>

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
