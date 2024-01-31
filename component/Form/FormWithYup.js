import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "bootstrap-daterangepicker/daterangepicker.css";
import * as yup from "yup";
import { Chips } from "primereact/chips";

const schema = yup.object({
  gender: yup.string().required("Select at least one"),
  name: yup.string().required(),
  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[6-9]\d{9}$/, "Invalid number")
    .min(10, "Mobile number must be exactly 10 characters")
    .max(10, "Mobile number must be exactly 10 characters"),

  email: yup
    .string()
    .email("Invalid email")
    .matches(/^[a-zA-Z0-9_.]+@[^\s@]+\.[a-zA-Z]{2,}$/, "Invalid email")
    .required("Please enter your email address"),
  state: yup.string().required(),
  qualification: yup

    .array()
    .of(yup.string())
    .typeError("Select at least one qualification ")
    .min(1, "Select at least one qualification")
    .required("Please select at least one qualification."),
});

const FormWithYup = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => 
  
  {
     localStorage.setItem(
       "logindat",
       JSON.stringify({
         name: data.name,
         email: data.email,
       })
     );

    console.log(JSON.parse(localStorage.getItem("logindat")));
   }
  
  
  
  const handleDateChange = (event, picker) => {
    const sdate = picker.startDate.format("MM/DD/YYYY");
    const eDate = picker.endDate.format("MM/DD/YYYY");
    setStartDate(sdate);
    setEndDate(eDate);
    setValue("daterange", `${sdate} - ${eDate}`);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="col-6 mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border rounded p-4 bg-light"
            >
              <div className="mb-3">
                <label className="mb-3">Date (Range)</label>
                <DateRangePicker
                  format="DD/MM/YYYY"
                  value={getValues("daterange")}
                  onApply={(event, picker) => handleDateChange(event, picker)}
                >
                  <input type="text" className="form-control" />
                </DateRangePicker>

                <label htmlFor="gender" className="form-label mt-3">
                  Gender
                </label>
                <small className="text-danger d-block">
                  {errors.gender?.message}
                </small>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    {...register("gender")}
                    value="male"
                    id="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    {...register("gender")}
                    value="female"
                    id="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  className="form-control"
                  id="name"
                  {...register("name")}
                />
                <small className="text-danger">{errors.name?.message}</small>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  className="form-control"
                  {...register("mobile")}
                />
                <small className="text-danger">{errors.mobile?.message}</small>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  {...register("email")}
                  id="email"
                />
                <small className="text-danger">{errors.email?.message}</small>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  {...register("state")}
                  aria-label="Default select example"
                  defaultValue="hello"
                >
                  <option value="">Select State</option>
                  <option value="up">Uttar Pradesh</option>
                  <option value="delhi">Delhi</option>
                  <option value="maharastra">Maharastra</option>
                </select>
                <small className="text-danger">{errors.state?.message}</small>
              </div>
              <div className="mb-3">
                <label>Qualification</label>
                <small className="text-danger d-block">
                  {errors.qualification?.message}
                </small>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    {...register("qualification", { required: true })}
                    value="bca"
                    id="bca"
                  />
                  <label className="form-check-label" htmlFor="bca">
                    Bca
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    {...register("qualification", { required: false })}
                    value="mca"
                    id="mca"
                  />
                  <label className="form-check-label" htmlFor="mca">
                    Mca
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormWithYup;
