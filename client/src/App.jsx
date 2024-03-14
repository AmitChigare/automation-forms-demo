// src/App.jsx
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentForm from "./components/StudentForm";
import FormC1 from "./components/FormC1";
import FormC2 from "./components/FormC2";
import FormC3 from "./components/FormC3";
import FormC4 from "./components/FormC4";
import FormC5 from "./components/FormC5";
import { FormProvider } from "./components/FormContext";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route
          path={"/form-c1"}
          element={
            <FormProvider>
              <FormC1 />
            </FormProvider>
          }
        />

        <Route path={"/form-c2"} element={<FormC2 />} />
        <Route path={"/form-c3"} element={<FormC3 />} />
        <Route path={"/form-c4"} element={<FormC4 />} />
        <Route path={"/form-c5"} element={<FormC5 />} />
        {/* <Route path={"/form"} element={<StudentForm />} /> */}
        {/* <Route path={"/form/:id"} element={<StudentForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
