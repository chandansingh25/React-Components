import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
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
                  type="text"
                  className="form-control"
                  id="name"
                  {...register("name")}
                  aria-describedby="name"
                />
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
                  aria-describedby="email"
                />
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
                  <option value="" disabled>
                    Select State
                  </option>
                  <option value="up">Uttar Pradesh</option>
                  <option value="delhi">Delhi</option>
                  <option value="maharastra">Maharastra</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Qualification</label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    {...register("qualification")}
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
                    {...register("qualification")}
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

export default Form;
