// src/App.jsx
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentForm from "./components/StudentForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/form"} element={<StudentForm />} />
        <Route path={"/form/:id"} element={<StudentForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
