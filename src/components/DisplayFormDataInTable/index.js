import React from "react";
import FormInput from "../FormInput";
import { useState } from "react";
import Table from "../Table";

const DisplayFormDataInTable = () => {
  const [tableData, setTableData] = useState([]);
  const [formInputData, setFormInputData] = useState({
    fullName: "",
    emailAddress: "",
    password: ""
  });
  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value
    });
    setFormInputData(newInput);{
      localStorage.setItem("formdat", JSON.stringify(formInputData));
    }
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = { fullName: "", emailAddress: "", password: "" };
      setFormInputData(emptyInput);
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <FormInput
              handleChange={handleChange}
              formInputData={formInputData}
              handleSubmit={handleSubmit}
            />
            <Table tableData={tableData} />
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DisplayFormDataInTable;
