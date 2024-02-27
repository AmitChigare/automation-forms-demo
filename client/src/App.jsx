// src/App.jsx
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentForm from "./components/StudentForm";
import FormC1 from "./components/FormC1";
import FormC2 from "./components/FormC2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/form-c1"} element={<FormC1 />} />
        <Route path={"/form-c2"} element={<FormC2 />} />
        {/* <Route path={"/form"} element={<StudentForm />} /> */}
        {/* <Route path={"/form/:id"} element={<StudentForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
