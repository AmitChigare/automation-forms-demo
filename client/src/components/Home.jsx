import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline mb-6">
        Here are all the forms
      </h1>
      <div className="flex flex-col space-y-4">
        <Link
          to="form-c1"
          className="text-blue-600 hover:underline hover:text-blue-800 font-semibold text-lg"
        >
          Form C1
        </Link>
        <Link
          to="form-c2"
          className="text-blue-600 hover:underline hover:text-blue-800 font-semibold text-lg"
        >
          Form C2
        </Link>
        <Link
          to="form-c3"
          className="text-blue-600 hover:underline hover:text-blue-800 font-semibold text-lg"
        >
          Form C3
        </Link>
        <Link
          to="form-c4"
          className="text-blue-600 hover:underline hover:text-blue-800 font-semibold text-lg"
        >
          Form C4
        </Link>
        <Link
          to="form-c5"
          className="text-blue-600 hover:underline hover:text-blue-800 font-semibold text-lg"
        >
          Form C5
        </Link>
      </div>
    </div>
  );
};

export default Home;
