import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayFormDataInTable from "./components/DisplayFormDataInTable";
import FormInput from "./components/FormInput";
import Table from "./components/Table";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import DashBoard from "./components/Dashboard";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<DashBoard/>} />
          <Route path="/displayformdataintable" element={<DisplayFormDataInTable />} />
          <Route path="/form/users" element={<FormInput />} />
          <Route path="/addtable" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
