import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./App.module.css";
import Container from 'react-bootstrap/esm/Container';


function Login(props) {
    return (
        <div>
            <h2 className='' >رایگان ثبت نام کنید</h2>
            <Row>
                <Col >
                <input type='text' placeholder='نام'></input>
                </Col>
                <Col>
                <input  type="text" placeholder=' نام خانوادگی'></input>
                </Col>
            </Row>
           
                <Container fluid>
                
                <input className={styles.w-100} type="email" placeholder='پست الکترونیک'></input>
              
                </Container>
                
            
            <Row>
                <Col>
                <input  type="password" placeholder='رمز عبور' ></input>
                </Col>
            </Row>
            
            
        </div>
    );
}

export default Login;