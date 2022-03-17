import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./App.module.css";
import Button from 'react-bootstrap/Button'

function Register(props) {
  return (
    <div dir="rtl">
      <Form className="p-3">
        <h3 className="p-4">رایگان ثبت‌ نام کنید</h3>
        <Row >
          <Col>
            <Form.Control placeholder="نام" />
          </Col>
          <Col>
            <Form.Control placeholder="نام خانوادگی" />
          </Col>
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
        <Row>
          <Col>
            <div className="d-grid mt-5 ">
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
