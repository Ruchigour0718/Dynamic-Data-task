import React from "react";

const FormInput = ({ handleChange, formInputData, handleSubmit }) => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-6">
            <form className="row g-3">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="on"
                  id="exampleInputName"
                  name="fullName"
                  value={formInputData.fullName}
                  placeholder="Enter your Name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  autoComplete="on"
                  name="emailAddress"
                  value={formInputData.emailAddress}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  autoComplete="on"
                  id="exampleInputPassword1"
                  name="password"
                  value={formInputData.password}
                  onChange={handleChange}
                  placeholder="Enter the password"
                />
              </div>
              <div className="col">
                <input
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormInput;
