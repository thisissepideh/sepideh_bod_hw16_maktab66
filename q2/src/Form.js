import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import styles from "./App.module.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Form(props) {
  const [islogin, setIslogin] = useState(true);

  return (
    <div className={styles.container}>
      <Row className="mx-0">
        <Col>
          <Button
           as={Col}
            size="lg"
            
            onClick={() => {
              setIslogin(false);
            }}
            variant={islogin ? "secondary" : "success"}
          >
            ورود
          </Button>
          <Button
           as={Col}
            size="lg"

            onClick={() => {
              setIslogin(true);
            }}
            variant={islogin ? "success" : "secondary"}
          >
            ثبت نام
          </Button>
        </Col>
      </Row>
  
      {islogin ? <Login /> : <Register />}
    </div>
  );
}

export default Form;
