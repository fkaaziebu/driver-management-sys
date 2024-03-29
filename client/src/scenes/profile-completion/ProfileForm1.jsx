import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { updateProfile } from "../../state/index";
import { useDispatch } from "react-redux";

const RegisterForm = ({ setStep }) => {
  const dispatch = useDispatch();

  const profileOneValues = {
    firstName: "",
    lastName: "",
    language: "",
    referralCode: "",
    carModel: "",
    carYear: "",
    licensePlate: "",
    carColor: "",
  };

  const profileOneValuesValidation = Yup.object().shape({
    firstName: Yup.string().required("First Name required"),
    lastName: Yup.string().required("Last Name required"),
    language: Yup.string().required("Language required"),
    carModel: Yup.string().required("Vehicle model required"),
    carYear: Yup.string().required("Vehicle year required"),
    licensePlate: Yup.string().required("License plate number required"),
    carColor: Yup.string().required("Vehicle color required"),
  });

  const handleSubmit = (values) => {
    dispatch(updateProfile({ ...values }));
    setStep(2);
  };

  const carYears = ["2023", "2022", "2021"];

  const languages = ["English", "Spanish", "French"];
  const colors = [
    "Red",
    "Yellow",
    "Orange",
    "Green",
    "Blue",
    "Violet",
    "Pink",
    "White",
    "Black",
  ];

  const carModels = [
    { manufacturer: "Toyota", models: ["Corolla", "Camry", "RAV4"] },
    { manufacturer: "Honda", models: ["Civic", "Accord", "CR-V"] },
  ];

  return (
    <Formik
      initialValues={profileOneValues}
      validationSchema={profileOneValuesValidation}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="mb-4 mt-4">
          <label htmlFor="firstName" className="form-label fw-bold">
            First Name
          </label>
          <Field
            name="firstName"
            id="firstName"
            type="text"
            className="form-control fs-4 border border-1 px-3"
            placeholder="John"
          />
          <ErrorMessage
            component="div"
            className="text-danger"
            name="firstName"
          />
        </div>

        <div className="mb-4 mt-4">
          <label htmlFor="lastName" className="form-label fw-bold">
            Last Name
          </label>
          <Field
            name="lastName"
            id="lastName"
            type="text"
            className="form-control fs-4 border border-1 px-3"
            placeholder="Doe"
          />
          <ErrorMessage
            component="div"
            className="text-danger"
            name="lastName"
          />
        </div>
        <div className="mb-4 mt-4">
          <label htmlFor="language" className="form-label fw-bold">
            Language
          </label>
          <Field
            name="language"
            id="language"
            as="select"
            className="form-control fs-4 border border-1 px-3"
          >
            <option value="">Select Language</option>
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </Field>
          <ErrorMessage
            component="div"
            className="text-danger"
            name="language"
          />
        </div>
        <div className="mb-4 mt-4">
          <label htmlFor="referralCode" className="form-label fw-bold">
            Referral code
          </label>
          <Field
            name="referralCode"
            id="referralCode"
            type="text"
            className="form-control fs-4 border border-1 px-3"
          />
          <p>If someone referred you, enter their code</p>
        </div>
        <div className="mb-4 mt-4">
          <label htmlFor="carYear" className="form-label fw-bold">
            Vehicle year
          </label>
          <Field
            name="carYear"
            id="carYear"
            as="select"
            className="form-control fs-4 border border-1 px-3"
          >
            <option value="">Select Year</option>
            {carYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Field>
          <ErrorMessage
            component="div"
            className="text-danger"
            name="carYear"
          />
        </div>

        <div className="mb-4 mt-4">
          <label htmlFor="carModel" className="form-label fw-bold">
            Vehicle manufacturer and model
          </label>
          <Field
            name="carModel"
            id="carModel"
            as="select"
            className="form-control fs-4 border border-1 px-3"
          >
            <option value="">Select Manufacturer and Model</option>
            {carModels.map((car) => (
              <optgroup key={car.manufacturer} label={car.manufacturer}>
                {car.models.map((model) => (
                  <option key={model} value={`${car.manufacturer} - ${model}`}>
                    {model}
                  </option>
                ))}
              </optgroup>
            ))}
          </Field>
          <ErrorMessage
            component="div"
            className="text-danger"
            name="carModel"
          />
        </div>
        <div className="mb-4 mt-4">
          <label htmlFor="licensePlate" className="form-label fw-bold">
            License plate
          </label>
          <Field
            name="licensePlate"
            id="licensePlate"
            type="text"
            className="form-control fs-4 border border-1 px-3"
            placeholder="GH-1023-24"
          />
          <ErrorMessage
            component="div"
            className="text-danger"
            name="licensePlate"
          />
        </div>
        <div className="mb-4 mt-4">
          <label htmlFor="carColor" className="form-label fw-bold">
            Vehicle color
          </label>
          <Field
            name="carColor"
            id="carColor"
            as="select"
            className="form-control fs-4 border border-1 px-3"
          >
            <option value="">Select Color</option>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </Field>
          <ErrorMessage
            component="div"
            className="text-danger"
            name="carColor"
          />
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button
            type="submit"
            className="btn btn-primary fs-4 mt-5 py-2 px-4 rounded-pill"
          >
            Next
          </button>
        </div>
      </Form>
    </Formik>
  );
};

function ProfileForm1({ setStep }) {
  return (
    <div className="container-sm d-flex flex-column align-items-center mt-4">
      <div className="w-100 mt-4">
        <h2 className="text-sm-center fs-3">
          Personal information and vehicle details
        </h2>
        <p className="text-sm-center text-muted">
          Only your first name and vehicle details are visible to clients during
          the booking.
        </p>
      </div>
      <div className="p-0 w-form-100 w-sm-75 mb-5">
        <RegisterForm setStep={setStep} />
      </div>
    </div>
  );
}

export default ProfileForm1;
