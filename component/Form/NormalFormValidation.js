"use client";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function NormalFormValidation() {
  const { register , control ,handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Container>
      <Row>
        <Col className="col-5">
          <Form onSubmit={handleSubmit(onSubmit)} >
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  {...register("fname")}
                  type="text"
                  placeholder="First name"
                
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  {...register("lname")}
                  type="text"
                  placeholder="Last name"
                  
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button type="submit">Submit form</Button>
          </Form>
          <DevTool control={control} />
        </Col>
      </Row>
    </Container>
  );
}

export default NormalFormValidation;
