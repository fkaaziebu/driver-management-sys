import React from "react";

const LoginForm = () => {
  return (
    <form>
      <div className="mb-4 mt-4">
        <label for="EmailAddress" className="form-label fw-bold">
          Email Address
        </label>
        <input
          type="emailAddress"
          id="emailAddress"
          className="form-control fs-5 p-3 bg-light-50 border border-0"
        />
      </div>
      <div className="mb-4 mt-4">
        <label for="contact" className="form-label fw-bold">
          Phone Number
        </label>
        <input
          type="text"
          id="lphoneNumber"
          className="form-control fs-5 p-3 bg-light-50 border border-0"
        />
      </div>

      <div className="d-flex justify-content-center mt-3">
        <button
          type="button"
          className="btn btn-primary fs-4 mt-5 py-3 px-5 rounded-pill"
        >
          Next
        </button>
      </div>
    </form>
  );
};

function Form() {
  return (
    <div className="container-sm d-flex flex-column align-items-center mt-4">
      <div className="w-100 mt-4">
        <h2 className="text-sm-center fs-3">
          Personsal information and vehicle details
        </h2>
        <p className="text-sm-center text-muted">
          Only your first name and vehicle details are visible to clients during
          the booking
        </p>
      </div>
      <div className="p-0 w-form-100 w-sm-75 mb-5">
        <LoginForm />
      </div>
    </div>
  );
}

export default Form;