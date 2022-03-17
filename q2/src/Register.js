import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./App.module.css";
import Button from "react-bootstrap/Button";
import React, { useState, useRef, useEffect } from "react";

function Register(props) {
  const education = useRef("");
  const [cities, setCities] = useState([]);
  const [edu, setEdu] = useState("");
  useEffect(() => {
    fetch("./iranstates.json")
      .then((res) => res.json())
      .then((res) => setCities(res));
  });
  return (
    <div dir="rtl">
      <Form className="p-2">
        <h3 className="p-3">رایگان ثبت‌ نام کنید</h3>
        <Row>
          <Col>
            <Form.Control placeholder="نام" />
          </Col>
          <Col>
            <Form.Control placeholder="نام خانوادگی" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Select aria-label="Default select example">
              <option>استان</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>شهر</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Control
              placeholder="تحصیلات"
              ref={education}
              onChange={() => {
                setEdu(education.current.value);
              }}
            />
          </Col>

          {edu != "" && (
            <Col>
              <Form.Control placeholder="محل تحصیل" />
            </Col>
          )}
        </Row>

        

        <Row className="mt-3">
          <Col>
            <Form.Control type="email" dir="auto" placeholder="پست الکترونیک" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Control type="password" placeholder="رمز عبور" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <div className="d-grid mt-5">
              <Button variant="success" size="lg">
                  ثبت‌ نام
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Register;
