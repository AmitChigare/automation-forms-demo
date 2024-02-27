import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Here are all the forms</h1>
      <Link to={"form-c1"}>Form C1</Link>
      <Link to={"form-c2"}>Form C2</Link>
    </div>
  );
};

export default Home;
