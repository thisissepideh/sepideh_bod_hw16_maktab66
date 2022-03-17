import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./App.module.css";
import Container from "react-bootstrap/esm/Container";

function Login(props) {
  return (
    <div>
      <Form className="p-3">
      <h3 className="p-4">خوش‌ آمدید</h3>
        <Row className="mt-3">
          <Col>
            <Form.Control type="email" placeholder="Enter email" />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <div className="d-grid mt-5 ">
              <Button variant="success" size="lg">
                  ورود
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Login;
